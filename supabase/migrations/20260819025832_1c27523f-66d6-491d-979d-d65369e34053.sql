CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text NOT NULL DEFAULT 'Student',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own profile" ON public.profiles FOR ALL TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE TABLE public.documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  code text NOT NULL DEFAULT '',
  course text NOT NULL DEFAULT '',
  doc_type text NOT NULL DEFAULT 'PDF',
  tone text NOT NULL DEFAULT 'green',
  meta text NOT NULL DEFAULT '',
  subject text NOT NULL DEFAULT 'far',
  offline boolean NOT NULL DEFAULT true,
  progress integer NOT NULL DEFAULT 0,
  last_page integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.documents TO authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own documents" ON public.documents FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX documents_user_idx ON public.documents(user_id);

CREATE TABLE public.highlights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  document_id uuid REFERENCES public.documents(id) ON DELETE CASCADE,
  content text NOT NULL,
  note text NOT NULL DEFAULT '',
  page integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.highlights TO authenticated;
GRANT ALL ON public.highlights TO service_role;
ALTER TABLE public.highlights ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own highlights" ON public.highlights FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX highlights_user_idx ON public.highlights(user_id);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER documents_updated_at BEFORE UPDATE ON public.documents FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NULLIF(NEW.raw_user_meta_data ->> 'display_name', ''), split_part(NEW.email, '@', 1), 'Student'));

  INSERT INTO public.documents (user_id, title, code, course, doc_type, tone, meta, subject, offline, progress, last_page) VALUES
    (NEW.id, 'IFRS 16 — Leases', 'IFRS 16', 'Financial Reporting', 'PDF', 'gold', '59 pages', 'far', true, 64, 38),
    (NEW.id, 'IAS 12 — Income Taxes', 'IAS 12', 'Financial Reporting', 'PPT', 'green', '42 slides', 'far', true, 0, 1),
    (NEW.id, 'Audit Risk & Materiality', 'Audit Risk', 'Audit & Assurance', 'DOCX', 'blue', '18 pages', 'audit', false, 31, 6),
    (NEW.id, 'Corporate Tax Computation', 'Corp Tax', 'Taxation', 'XLSX', 'plum', '6 sheets', 'tax', true, 0, 1);
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
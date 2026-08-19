# SeyramReads Elevated

we are building a mobile app calles seyramreads this is the current staet<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#071b18" />
  <title>Accounting Reader</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f5f7f3;
      --surface: #ffffff;
      --surface-2: #eef4ef;
      --surface-3: #e7f0ea;
      --text: #12211d;
      --muted: #6f7f79;
      --line: #dfe8e2;
      --primary: #0d5a46;
      --primary-2: #128262;
      --primary-soft: #dcefe7;
      --gold: #d9b15c;
      --danger: #c75050;
      --shadow: 0 14px 40px rgba(24, 55, 45, 0.08);
      --radius-xl: 28px;
      --radius-lg: 22px;
      --radius-md: 16px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: "DM Sans", system-ui, sans-serif;
      background:
        radial-gradient(circle at top right, rgba(13,90,70,.08), transparent 25%),
        var(--bg);
      color: var(--text);
      min-height: 100vh;
    }
    button, input { font: inherit; }
    button { cursor: pointer; }
    .app-shell { min-height: 100vh; padding-bottom: 96px; }
    .desktop-rail { display: none; }

    .topbar {
      position: sticky; top: 0; z-index: 50;
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 18px 18px 12px;
      background: rgba(245,247,243,.88);
      backdrop-filter: blur(18px);
    }
    .brand { display: flex; align-items: center; gap: 12px; }
    .brand-mark {
      width: 42px; height: 42px; border-radius: 14px;
      display: grid; place-items: center;
      background: linear-gradient(145deg, var(--primary), #06372c);
      color: white; box-shadow: 0 10px 24px rgba(13,90,70,.25);
    }
    .brand h1 { font: 800 17px/1.1 "Manrope", sans-serif; letter-spacing: -.4px; }
    .brand span { color: var(--muted); font-size: 12px; }
    .icon-btn {
      width: 42px; height: 42px; border: 1px solid var(--line); border-radius: 14px;
      background: var(--surface); color: var(--text); display: grid; place-items: center;
      box-shadow: 0 6px 18px rgba(24,55,45,.05);
    }
    .main { width: min(100%, 1180px); margin: auto; padding: 8px 16px 32px; }

    .hero {
      position: relative; overflow: hidden;
      background: linear-gradient(135deg, #082d25 0%, #0d5a46 58%, #168167 100%);
      color: #fff; border-radius: var(--radius-xl); padding: 24px;
      min-height: 238px; box-shadow: 0 24px 55px rgba(13,90,70,.20);
    }
    .hero::after {
      content: ""; position: absolute; width: 210px; height: 210px; border-radius: 50%;
      right: -70px; top: -75px; border: 1px solid rgba(255,255,255,.16);
      box-shadow: 0 0 0 28px rgba(255,255,255,.035), 0 0 0 60px rgba(255,255,255,.025);
    }
    .eyebrow {
      width: fit-content; display: flex; align-items: center; gap: 8px;
      font-size: 12px; font-weight: 700; color: #d9f6e9;
      background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.14);
      padding: 8px 10px; border-radius: 999px; margin-bottom: 18px;
    }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #69e2ad; box-shadow: 0 0 0 4px rgba(105,226,173,.15); }
    .hero h2 { max-width: 520px; font: 800 29px/1.07 "Manrope", sans-serif; letter-spacing: -1.1px; margin-bottom: 10px; }
    .hero p { max-width: 510px; color: rgba(255,255,255,.72); line-height: 1.55; font-size: 14px; }
    .hero-actions { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
    .btn {
      border: 0; border-radius: 14px; padding: 12px 15px; display: inline-flex;
      align-items: center; justify-content: center; gap: 9px; font-weight: 700;
      transition: .2s ease; min-height: 44px;
    }
    .btn:hover { transform: translateY(-1px); }
    .btn-light { background: white; color: var(--primary); }
    .btn-glass { color: white; background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.16); }

    .quick-grid {
      display: grid; grid-template-columns: repeat(2, 1fr);
      gap: 12px; margin: 18px 0 26px;
    }
    .quick-card {
      text-align: left; border: 1px solid var(--line); background: var(--surface);
      border-radius: 20px; padding: 15px; min-height: 132px; box-shadow: var(--shadow);
      transition: .2s ease;
    }
    .quick-card:hover { transform: translateY(-2px); border-color: #c9dacf; }
    .quick-icon {
      width: 42px; height: 42px; border-radius: 14px; display: grid; place-items: center;
      background: var(--primary-soft); color: var(--primary); margin-bottom: 15px;
    }
    .quick-card h3 { font: 700 14px/1.2 "Manrope"; margin-bottom: 5px; }
    .quick-card p { color: var(--muted); font-size: 12px; line-height: 1.4; }

    .section { margin-top: 24px; }
    .section-head { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 13px; }
    .section-head h2 { font: 800 20px/1.1 "Manrope"; letter-spacing: -.5px; }
    .section-head p { color: var(--muted); font-size: 12px; margin-top: 4px; }
    .text-btn { border: 0; background: transparent; color: var(--primary); font-weight: 700; font-size: 13px; }

    .continue-card {
      background: var(--surface); border: 1px solid var(--line); border-radius: 22px;
      padding: 15px; display: grid; grid-template-columns: 72px 1fr; gap: 14px; box-shadow: var(--shadow);
    }
    .doc-cover {
      min-height: 96px; border-radius: 15px; padding: 11px;
      color: white; background: linear-gradient(160deg, #b79646, #6e5323);
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 10px; font-weight: 700; letter-spacing: .5px;
    }
    .doc-cover b { font-size: 24px; line-height: 1; }
    .doc-meta { min-width: 0; }
    .doc-meta .tag { color: var(--primary); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .8px; }
    .doc-meta h3 { font: 700 15px/1.35 "Manrope"; margin: 5px 0 6px; }
    .doc-meta p { color: var(--muted); font-size: 12px; }
    .progress-row { display: flex; gap: 10px; align-items: center; margin-top: 13px; }
    .progress { flex: 1; height: 7px; border-radius: 999px; background: #e8eeea; overflow: hidden; }
    .progress > span { display: block; height: 100%; width: 64%; border-radius: inherit; background: linear-gradient(90deg, var(--primary), var(--primary-2)); }
    .progress-row b { font-size: 11px; color: var(--primary); }

    .course-scroll { display: grid; grid-auto-flow: column; grid-auto-columns: 158px; gap: 12px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
    .course-card {
      min-height: 150px; border-radius: 21px; padding: 16px; color: white;
      position: relative; overflow: hidden; box-shadow: var(--shadow);
    }
    .course-card::after { content:""; position:absolute; width:90px; height:90px; border:1px solid rgba(255,255,255,.15); border-radius:50%; right:-28px; bottom:-28px; }
    .course-card:nth-child(1){ background:linear-gradient(145deg,#0b5a46,#09372e); }
    .course-card:nth-child(2){ background:linear-gradient(145deg,#6c5726,#b08b37); }
    .course-card:nth-child(3){ background:linear-gradient(145deg,#324b76,#1c2d4d); }
    .course-card:nth-child(4){ background:linear-gradient(145deg,#6e3854,#3f2030); }
    .course-card small { color: rgba(255,255,255,.68); font-weight: 700; }
    .course-card h3 { font: 800 18px/1.15 "Manrope"; margin-top: 8px; max-width: 110px; }
    .course-card .count { position:absolute; left:16px; bottom:16px; font-size:11px; color:rgba(255,255,255,.7); }

    .tools-list { display: grid; gap: 10px; }
    .tool-row {
      background: var(--surface); border: 1px solid var(--line); border-radius: 18px;
      padding: 13px; display: flex; align-items: center; gap: 13px;
    }
    .tool-row .mini-icon { width: 42px; height: 42px; border-radius: 14px; background: var(--surface-2); display:grid; place-items:center; color:var(--primary); flex:0 0 auto; }
    .tool-row h3 { font: 700 14px "Manrope"; }
    .tool-row p { color: var(--muted); font-size: 11px; margin-top: 3px; }
    .tool-row .chev { margin-left: auto; color: #95a29d; }

    .bottom-nav {
      position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 80;
      background: rgba(255,255,255,.94); backdrop-filter: blur(18px);
      border: 1px solid rgba(218,228,222,.9); border-radius: 22px;
      min-height: 68px; padding: 8px; display: grid; grid-template-columns: repeat(5, 1fr);
      box-shadow: 0 18px 50px rgba(31,57,48,.16);
    }
    .nav-item {
      border:0; background:transparent; color:#809089; border-radius:15px; display:flex;
      flex-direction:column; align-items:center; justify-content:center; gap:4px; font-size:10px; font-weight:700;
    }
    .nav-item.active { background: var(--primary-soft); color: var(--primary); }
    .nav-item svg { width:20px; height:20px; }

    .screen { display: none; }
    .screen.active { display: block; animation: fade .22s ease; }
    @keyframes fade { from{opacity:.2;transform:translateY(4px)} to{opacity:1;transform:none} }

    .page-title { margin: 10px 2px 18px; }
    .page-title h2 { font: 800 28px/1.05 "Manrope"; letter-spacing:-1px; }
    .page-title p { color:var(--muted); font-size:13px; margin-top:7px; }
    .search {
      display:flex; align-items:center; gap:10px; padding:12px 14px; border-radius:16px;
      border:1px solid var(--line); background:var(--surface); margin-bottom:14px;
    }
    .search input { border:0; outline:0; background:transparent; width:100%; color:var(--text); }
    .filter-row { display:flex; gap:8px; overflow-x:auto; scrollbar-width:none; margin-bottom:15px; }
    .chip { border:1px solid var(--line); background:var(--surface); color:var(--muted); padding:9px 12px; border-radius:999px; white-space:nowrap; font-size:12px; font-weight:700; }
    .chip.active { color:white; background:var(--primary); border-color:var(--primary); }

    .library-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
    .file-card {
      background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:13px;
      min-height:185px; box-shadow:0 8px 22px rgba(24,55,45,.045);
    }
    .file-preview { height:92px; border-radius:14px; padding:12px; display:flex; flex-direction:column; justify-content:space-between; color:white; background:linear-gradient(145deg,#123f35,#1b795d); }
    .file-preview.gold { background:linear-gradient(145deg,#7a5d24,#bd9848); }
    .file-preview.blue { background:linear-gradient(145deg,#243c66,#5270a5); }
    .file-type { font-size:10px; letter-spacing:1px; font-weight:800; opacity:.78; }
    .file-preview b { font:800 16px "Manrope"; }
    .file-card h3 { font:700 13px/1.35 "Manrope"; margin:11px 0 6px; }
    .file-card p { color:var(--muted); font-size:10px; }

    .ai-banner {
      border-radius:24px; padding:22px; color:white;
      background:linear-gradient(145deg,#112c26,#0f624b); position:relative; overflow:hidden; margin-bottom:16px;
    }
    .ai-banner:after { content:"✦"; position:absolute; right:20px; top:7px; font-size:100px; color:rgba(255,255,255,.05); }
    .ai-banner h2 { font:800 25px "Manrope"; margin:8px 0; }
    .ai-banner p { color:rgba(255,255,255,.7); font-size:13px; line-height:1.5; max-width:450px; }
    .ai-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:11px; }
    .ai-card { border:1px solid var(--line); background:var(--surface); border-radius:19px; padding:16px; min-height:140px; }
    .ai-card .quick-icon { margin-bottom:12px; }
    .ai-card h3 { font:700 14px "Manrope"; }
    .ai-card p { color:var(--muted); font-size:11px; line-height:1.45; margin-top:5px; }

    .profile-card { background:var(--surface); border:1px solid var(--line); border-radius:22px; padding:18px; display:flex; gap:14px; align-items:center; }
    .avatar { width:58px;height:58px;border-radius:18px;background:linear-gradient(145deg,#0d5a46,#158569);color:white;display:grid;place-items:center;font:800 20px "Manrope"; }
    .profile-card h3 { font:800 17px "Manrope"; }
    .profile-card p { color:var(--muted);font-size:12px;margin-top:4px; }
    .setting-group { margin-top:18px; background:var(--surface);border:1px solid var(--line);border-radius:22px;overflow:hidden; }
    .setting { padding:15px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--line); }
    .setting:last-child { border-bottom:0; }
    .setting .mini-icon { width:38px;height:38px;border-radius:13px;background:var(--surface-2);display:grid;place-items:center;color:var(--primary); }
    .setting h4 { font-size:13px; }
    .setting p { color:var(--muted);font-size:10px;margin-top:3px; }
    .toggle { margin-left:auto;width:44px;height:25px;border-radius:999px;background:#dbe4df;padding:3px;border:0;transition:.2s; }
    .toggle span { display:block;width:19px;height:19px;border-radius:50%;background:white;box-shadow:0 2px 6px rgba(0,0,0,.15);transition:.2s; }
    .toggle.on { background:var(--primary); }
    .toggle.on span { transform:translateX(19px); }

    .modal-backdrop { position:fixed;inset:0;background:rgba(5,18,15,.52);z-index:100;display:none;align-items:flex-end;justify-content:center;backdrop-filter:blur(5px); }
    .modal-backdrop.show { display:flex; }
    .sheet { width:min(100%,620px);background:var(--surface);border-radius:26px 26px 0 0;padding:14px 18px 24px;max-height:85vh;overflow:auto;animation:up .25s ease; }
    @keyframes up { from{transform:translateY(100%)} to{transform:none} }
    .handle { width:42px;height:4px;border-radius:99px;background:#d6dfda;margin:0 auto 18px; }
    .sheet h2 { font:800 22px "Manrope"; }
    .sheet-sub { color:var(--muted);font-size:12px;line-height:1.45;margin:7px 0 18px; }
    .upload-zone { border:1.5px dashed #bdd0c5;background:var(--surface-2);border-radius:20px;padding:26px 16px;text-align:center; }
    .upload-zone .big { width:54px;height:54px;border-radius:17px;background:var(--primary-soft);color:var(--primary);display:grid;place-items:center;margin:0 auto 12px; }
    .upload-zone h3 { font:700 14px "Manrope"; }
    .upload-zone p { color:var(--muted);font-size:11px;margin:5px 0 14px; }
    .format-row { display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin-top:14px; }
    .format { background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:6px 8px;font-size:9px;font-weight:800;color:var(--muted); }
    .reader-overlay { position:fixed;inset:0;background:var(--bg);z-index:120;display:none;overflow:auto; }
    .reader-overlay.show { display:block; }
    .reader-top { position:sticky;top:0;background:rgba(245,247,243,.95);backdrop-filter:blur(15px);padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--line);z-index:5; }
    .reader-title { flex:1;min-width:0; }
    .reader-title h3 { font:700 13px "Manrope";white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
    .reader-title p { color:var(--muted);font-size:10px;margin-top:2px; }
    .reader-page { width:min(100% - 24px,760px);margin:18px auto 100px;background:white;border:1px solid var(--line);border-radius:18px;padding:24px 20px;box-shadow:var(--shadow); }
    .reader-page h1 { font:800 25px/1.15 "Manrope";margin-bottom:8px; }
    .reader-page h2 { font:800 17px "Manrope";margin:24px 0 8px;color:var(--primary); }
    .reader-page p { color:#34453f;line-height:1.75;font-size:14px;margin:10px 0; }
    .reader-page mark { background:#fff0ad;padding:2px 3px;border-radius:3px; }
    .formula-box { background:#eef6f1;border-left:4px solid var(--primary);border-radius:12px;padding:14px;margin:16px 0;font:700 14px "Manrope"; }
    .reader-tools { position:fixed;left:50%;transform:translateX(-50%);bottom:16px;background:#0f261f;color:white;border-radius:18px;padding:7px;display:flex;gap:4px;box-shadow:0 16px 40px rgba(0,0,0,.24);z-index:8; }
    .reader-tools button { width:44px;height:42px;border:0;border-radius:12px;background:transparent;color:white;display:grid;place-items:center; }
    .reader-tools button:hover { background:rgba(255,255,255,.10); }

    body.dark {
      --bg:#0b1210;--surface:#111a17;--surface-2:#17231f;--surface-3:#1a2924;
      --text:#edf5f1;--muted:#91a29b;--line:#24332e;--primary-soft:#17372d;
      --shadow:0 14px 40px rgba(0,0,0,.2);
    }
    body.dark .topbar, body.dark .reader-top { background:rgba(11,18,16,.9); }
    body.dark .bottom-nav { background:rgba(17,26,23,.95);border-color:#26372f; }
    body.dark .reader-page { background:#111a17; }
    body.dark .reader-page p { color:#c4d0cb; }
    body.dark .reader-tools { background:#e5f0eb;color:#0d1d18; }
    body.dark .reader-tools button { color:#0d1d18; }

    .toast { position:fixed;left:50%;transform:translateX(-50%) translateY(20px);bottom:98px;background:#10251f;color:white;padding:11px 15px;border-radius:12px;font-size:12px;font-weight:700;opacity:0;pointer-events:none;transition:.25s;z-index:200;box-shadow:0 10px 30px rgba(0,0,0,.2); }
    .toast.show { opacity:1;transform:translateX(-50%) translateY(0); }

    svg { width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round; }

    @media (min-width: 760px) {
      .quick-grid { grid-template-columns:repeat(4,1fr); }
      .library-grid { grid-template-columns:repeat(3,1fr); }
      .ai-grid { grid-template-columns:repeat(4,1fr); }
      .main { padding: 12px 28px 42px; }
      .hero { padding:34px;min-height:270px; }
      .hero h2 { font-size:38px; }
    }
    @media (min-width: 1050px) {
      .app-shell { padding-left:250px;padding-bottom:0; }
      .desktop-rail { display:flex;position:fixed;left:0;top:0;bottom:0;width:250px;background:#0b2e26;color:white;padding:24px 18px;flex-direction:column;z-index:90; }
      .desktop-rail .brand { margin:2px 8px 30px; }
      .desktop-rail .brand-mark { background:#fff;color:var(--primary); }
      .desktop-nav { display:grid;gap:7px; }
      .desktop-nav button { border:0;background:transparent;color:rgba(255,255,255,.66);display:flex;align-items:center;gap:12px;padding:12px 13px;border-radius:13px;font-weight:700;text-align:left; }
      .desktop-nav button.active { background:rgba(255,255,255,.12);color:white; }
      .rail-foot { margin-top:auto;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.09);padding:15px;border-radius:18px; }
      .rail-foot b { font:700 13px "Manrope";display:block; }
      .rail-foot span { color:rgba(255,255,255,.6);font-size:10px;line-height:1.4;display:block;margin-top:5px; }
      .topbar { padding:18px 30px 12px; }
      .topbar .brand { display:none; }
      .topbar { justify-content:flex-end; }
      .bottom-nav { display:none; }
      .library-grid { grid-template-columns:repeat(4,1fr); }
    }
  


  


    


      


        


        

Accounting Reader

Study smarter. Anywhere.


      


      
         Home
         My Library
         AI Study Tools
         Progress
         Settings
      
      

Offline mode readyYour downloaded files, highlights and reading progress stay available without internet.


    



    


      


        


        

Accounting Reader

Good afternoon, Stanley


      


      
        
      
    



    
      


        


          

 Offline library available


          

Your accounting study desk, in your pocket.


          

Read IFRS notes, extract formulas, listen to documents, generate summaries and revise with flashcards — online or offline.


          


             Import document
             Scan notes
          


        



        


          
            


            

AI Summary

Turn long accounting notes into clear revision points.


          
          
            


            

Formula Extractor

Find and collect formulas from any document.


          
          
            


            

Flashcards

Convert highlights and notes into revision cards.


          
          
            


            

Listen

Use text-to-speech while commuting or revising.


          
        



        


          

Continue reading

Pick up where you stopped

View library


          
            

IFRS16Leases


            


              Financial Reporting
              

IFRS 16 — Leases: Recognition, Measurement & Disclosure


              

Page 38 of 59 • Last read today


              

64%


            


          
        



        


          

Your courses

Documents organised for revision

Manage


          


            

FAR

Financial Reporting

18 documents


            

TAX

Taxation

12 documents


            

AUD

Audit & Assurance

9 documents


            

MA

Management Accounting

14 documents


          


        



        


          

Study tools

Built for accounting documents


          


            

Table Reader

Read trial balances, statements and schedules clearly.

›


            

Search across documents

Find “deferred tax” or any concept across your library.

›


            

Highlights & exam notes

Save definitions, IFRS paragraphs and your own exam tips.

›


          


        


      



      


        

My Library

All your accounting materials, available even when data is off.


        


        


          All filesFARTaxAuditOffline
        


        


          
            

PDF • IFRSIFRS 16
Leases59 pages


            

IFRS 16 — Leases

Financial Reporting • 64% read


          
          
            

PPT • IASIAS 12
Income Tax42 slides


            

IAS 12 — Income Taxes

Financial Reporting • Offline


          
          
            

DOCX • AUDITAudit Risk
& Materiality18 pages


            

Audit Risk & Materiality

Audit & Assurance • 31% read


          
          
            

XLSX • TAXCorporate
Tax6 sheets


            

Corporate Tax Computation

Taxation • Offline


          
        


      



      


        


          ✦ Accounting AI
          

Understand the hard parts faster.


          

Select a document and let the study assistant simplify standards, explain accounting treatments, extract formulas or generate revision material.


          Choose a document
        


        

AI study tools

Online features • requires internet


        


          

Smart Summary

Summarise a 30-page document into exam-ready points.


          

Formula Extractor

Detect formulas and explain when each is used.


          

Flashcards

Create questions and answers from selected sections.


          

Explain Concept

Ask “Explain deferred tax like I’m revising for exams.”


        


      



      


        

Study Progress

A simple view of how consistently you are moving through your courses.


        


          

This week


          

4h 35m studied


          

12% more focused reading than last week.


          

72%


        


        


          

Course completion

Based on documents you have opened


          


            

FAR

Financial Reporting

68%


            

TAX

Taxation

52%


            

AUD

Audit & Assurance

41%


          


        


      



      


        

Settings

Control your reading experience, storage and sync preferences.


        

SA

Stanley Accounting

Accounting Student • 46 local documents


        


          

Dark mode

Comfortable late-night reading


          

Keep downloads offline

Save imported files on this device


          

Sync notes when online

Backup progress, notes and highlights


        


      


    

    
      Home
      Library
      AI Tools
      Progress
      Settings
    



  


    


      


      

Import study material


      

Bring your accounting documents into one library. In the real app, large files can be stored locally with Capacitor Filesystem.


      


        


        

Choose a file from your phone


        

PDF, DOCX, PPTX, XLSX, TXT or an image of handwritten notes.


        
        Browse files
        

PDFDOCXPPTXXLSXTXTIMAGE


      


      Cancel
    



  


    


      
      

IFRS 16 — Leases

Page 38 of 59 • Financial Reporting


      
    


    


      IFRS 16 • LEASES
      

Recognition and measurement of lease liabilities


      

At the commencement date, a lessee recognises a right-of-use asset and a lease liability. The purpose is to reflect the economic reality that the entity controls the use of an identified asset while also having an obligation to make lease payments.


      

Initial measurement


      

The lease liability is initially measured at the present value of lease payments that are not paid at the commencement date. Those payments are discounted using the interest rate implicit in the lease, if that rate can be readily determined.


      

PV = FV / (1 + r)n


      

Exam tip: Where the implicit rate cannot be readily determined, the lessee normally uses its incremental borrowing rate.


      

Subsequent measurement


      

After commencement, the liability is increased to reflect interest and reduced for lease payments made. The right-of-use asset is normally depreciated over the shorter of the asset’s useful life and the lease term, subject to the standard’s specific requirements.


      

This prototype reader demonstrates highlighting, formulas, bookmarks, text-to-speech and AI tools. Your real Capacitor build can store reading position and annotations locally for offline access.


    


    


      
      
      
      
    



  

Saved



  

and that is the code in html,css and js ,you adding react+vite only design a You are a senior product designer and frontend engineer specializing in mobile-first app UI. I have a working prototype of an app called SeyramReads (an accounting study/reading app) built in HTML/CSS/JS. I'm attaching the current code. Your job is to redesign the visual layer into a modern, tactile "3D" interface while keeping every existing feature, screen, and interaction working exactly as it does now.

1. Visual direction: soft 3D / elevated depth UI

Use a layered elevation system (not flat cards): each surface should read as physically raised or inset using soft shadows, subtle highlights, and depth-appropriate blur — think neumorphism combined with glassmorphism accents, not a heavy skeuomorphic 2010-era style.

Define 3–4 elevation tiers (background → resting card → raised/active card → floating/overlay element) and apply them consistently. Each tier gets its own shadow pair (a dark shadow + a light highlight) so surfaces feel like they sit at different heights.

Buttons, toggles, and nav items should have a pressed/unpressed state with a tactile depth change on tap (translateY + shadow compression), not just a color change.

Keep the current brand palette (deep green #0d5a46, gold #d9b15c, soft off-white background) — enhance it with depth, don't replace it.

Icons and cards can use subtle gradients, rounded corners (keep the existing large-radius language), and soft inner shadows for "inset" elements like search bars and progress tracks.

Preserve dark mode — the 3D shadow system needs a separate light-on-dark version (lighter highlight, deeper shadow) so elevation still reads correctly at night.

2. Apply core HCI/usability principles explicitly

For every screen, justify and apply:

Fitts's Law — primary actions (Import, Continue Reading, bottom nav items) get large, easy-to-hit touch targets (min 44×44px, ideally 48×48px) placed within comfortable thumb reach on mobile.

Hick's Law — reduce simultaneous choices per screen; group secondary actions behind clear entry points rather than exposing everything at once.

Visual hierarchy — use size, weight, contrast, and elevation (not just color) to signal what matters most on each screen (e.g., "Continue reading" card should outrank generic tool rows).

Consistency & standards — one icon style, one spacing scale, one corner-radius scale, one shadow system used everywhere.

Feedback & system status — every tap gets a visible response within ~100ms (press state, ripple, or scale); loading and offline states are clearly communicated (you already have a toast system — extend it, don't replace it).

Recognition over recall — labels stay visible alongside icons where space allows; don't rely on icon-only navigation without labels.

Error prevention & forgiving interactions — destructive or import actions (like closing the reader with unsaved highlights) should have gentle confirmation or easy undo.

Accessibility — maintain WCAG AA contrast (4.5:1 for body text) even with the new shadow/gradient treatments; ensure focus states are visible for keyboard/switch users; respect prefers-reduced-motion for anyone who disables animation.

Gestalt principles — use proximity and grouping so related controls (e.g., reader toolbar buttons) feel like one unit, and unrelated sections have clear separation via spacing, not just borders.

3. Screen-by-screen expectations

Home: hero card gets the most elevation (feels like the "front" of the stack); quick-action grid uses raised tiles with pressed states; continue-reading card is the visual anchor of the page.

Library: file cards should feel like a stack of physical documents — subtle depth increase on hover/press, clear offline/online distinction via a badge, not just text.

AI Study Tools: the AI banner should feel like a distinct "elevated glass" panel to signal it's a different, premium-feeling zone.

Reader: the floating toolbar at the bottom should feel like it's hovering above the page (strongest shadow in the app); highlighted text and formula boxes get their own subtle depth treatment so they don't look like flat highlighter marks.

Settings/Progress: toggles and progress bars get an inset "carved" look (soft inner shadow) to differentiate from raised elements.

4. Deliverable

Keep it a single self-contained HTML/CSS/JS file (or React if requested), reusing my existing structure, IDs, and JS logic — only update CSS (and minimal markup) needed to achieve the 3D depth system.

Add CSS custom properties for the new shadow/elevation tokens so they're easy to tune later (e.g., --elevation-1, --elevation-2, --shadow-inset). with same colors but super very nice follow my instructions above

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4315e7d0-3304-412e-acca-e3102d5fe9a4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

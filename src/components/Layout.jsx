import React, { useState } from "react";
import {
  Activity, Bell, BookOpen, CakeSlice, ChevronDown, CreditCard, FileText,
  GraduationCap, Home, LockKeyhole, LogOut, Menu, Search, Settings, UserRound,
  Video, Wallet, X, Sparkles
} from "lucide-react";

const links = [
  ["Tableau de bord", Home], ["Mes vidéos", Video], ["Mes codes d'accès", LockKeyhole],
  ["Mes élèves", GraduationCap], ["Mes paiements", Wallet], ["Mes PDF", FileText],
  ["Paramètres", Settings], ["Profil propriétaire", UserRound],
];

export default function Layout({ page, setPage, children, search, setSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);

  const sidebar = <div className="sidebar-inner">
    <div className="brand"><div className="brand-mark"><CakeSlice size={27}/><span>✦</span></div><div><strong>Cake Academy</strong><small>DOUALA · CAMEROUN</small></div></div>
    <div className="workspace"><span><Sparkles size={13}/> ESPACE PROPRIÉTAIRE</span><p>Votre école, votre passion.</p></div>
    <p className="nav-caption">MENU PRINCIPAL</p>
    <nav className="side-nav w-full overflow-x-none">{links.map(([label, Icon]) => <button key={label} onClick={() => { setPage(label); setMobileOpen(false); }} className={page === label ? "nav-link active" : "nav-link"}><Icon size={18}/><span>{label}</span>{page === label && <i/>}</button>)}</nav>
    <div className="sidebar-promo"><div className="promo-photo"/><div className="promo-copy"><b>La passion se partage.</b><p>Faites grandir votre communauté de pâtissières.</p></div><span className="promo-tag">✦ PREMIUM ACADEMY</span></div>
    <button className="logout-link" onClick={() => alert("Connectez ici votre système de déconnexion Django.")}><LogOut size={17}/> Déconnexion</button>
  </div>;

  return <div className="app-shell">
    <aside className="desktop-sidebar">{sidebar}</aside>
    {mobileOpen && <div className="mobile-overlay"><button className="overlay-close" onClick={() => setMobileOpen(false)} aria-label="Fermer le menu"/><aside className="mobile-sidebar">{sidebar}</aside></div>}
    <main className="main-area">
      <header className="topbar">
        <button className="mobile-menu icon-button" onClick={() => setMobileOpen(true)}><Menu/></button>
        <div className="global-search"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une vidéo, un élève, un code..."/><kbd>⌘ K</kbd></div>
        <div className="top-actions">
          <div className="popover-wrap"><button className="icon-button notification-button" onClick={() => {setNotifications(!notifications);setProfile(false);}}><Bell size={19}/><i/></button>{notifications && <div className="popover"><b>Notifications</b><p>💗 Nouveau paiement reçu : 10 000 FCFA</p><p>🎟️ Un code attend son élève</p><p>🎓 Nouvelle inscription aujourd'hui</p></div>}</div>
          <div className="top-divider"/>
          <div className="popover-wrap"><button className="profile-trigger" onClick={() => {setProfile(!profile);setNotifications(false);}}><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=85" alt="Aicha"/><span><b>Aicha</b><small>Propriétaire</small></span><ChevronDown size={15}/></button>{profile && <div className="popover profile-popover"><button onClick={() => {setPage("Profil propriétaire");setProfile(false);}}>Mon profil</button><button onClick={() => {setPage("Paramètres");setProfile(false);}}>Paramètres</button></div>}</div>
        </div>
      </header>
      <div className="content-wrap">{children}<footer className="footer"><span>© 2026 Cake Academy · Douala, Cameroun</span><span><i/> Votre espace de formation</span></footer></div>
    </main>
  </div>;
}
export const initialVideos = [
  { id: 1, title: "Gâteau au Chocolat", category: "Pâtisserie classique", duration: "30 min", price: 5000, sales: 28, status: "Publié", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", description: "Apprenez à réaliser un gâteau au chocolat moelleux, avec une finition professionnelle." },
  { id: 2, title: "Layer Cake Anniversaire", category: "Gâteaux modernes", duration: "45 min", price: 10000, sales: 20, status: "Publié", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=900&q=85", description: "Maîtrisez le montage, le lissage et la décoration d'un layer cake." },
  { id: 3, title: "Cupcakes Élégants", category: "Petits gâteaux", duration: "25 min", price: 4000, sales: 16, status: "Brouillon", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85", description: "Des cupcakes réguliers, gourmands et joliment décorés." },
  { id: 4, title: "Wedding Cake Chic", category: "Événementiel", duration: "60 min", price: 15000, sales: 12, status: "Publié", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85", description: "Les bases d'un gâteau de mariage élégant à plusieurs étages." },
];

export const initialCodes = [
  { id: 1, code: "CAKE-8392-X", student: "Marie Djoumessi", course: "Gâteau au Chocolat", status: "Utilisé", date: "15/11/2026" },
  { id: 2, code: "CAKE-9210-Z", student: "En attente", course: "Layer Cake Anniversaire", status: "En attente", date: "15/11/2026" },
  { id: 3, code: "CAKE-7788-Y", student: "Fatou Kamga", course: "Cupcakes Élégants", status: "Utilisé", date: "14/11/2026" },
  { id: 4, code: "CAKE-4421-A", student: "Carine Mbala", course: "Wedding Cake Chic", status: "Expiré", date: "12/11/2026" },
];

export const students = [
  { id: 1, name: "Marie Djoumessi", email: "marie.djoumessi@email.com", phone: "+237 690 123 456", joined: "12 nov. 2026", progress: 85, courses: 3, status: "Active", avatar: "https://i.pravatar.cc/100?img=47" },
  { id: 2, name: "Fatou Kamga", email: "fatou.k@email.com", phone: "+237 677 234 567", joined: "10 nov. 2026", progress: 62, courses: 2, status: "Active", avatar: "https://i.pravatar.cc/100?img=44" },
  { id: 3, name: "Carine Mbala", email: "carine.m@email.com", phone: "+237 655 345 678", joined: "08 nov. 2026", progress: 100, courses: 4, status: "Diplômée", avatar: "https://i.pravatar.cc/100?img=49" },
  { id: 4, name: "Estelle Nguemo", email: "estelle.n@email.com", phone: "+237 699 456 789", joined: "05 nov. 2026", progress: 28, courses: 1, status: "Active", avatar: "https://i.pravatar.cc/100?img=45" },
  { id: 5, name: "Grâce Tchoumi", email: "grace.t@email.com", phone: "+237 681 567 890", joined: "02 nov. 2026", progress: 12, courses: 1, status: "Inactive", avatar: "https://i.pravatar.cc/100?img=42" },
];

export const payments = [
  { id: "PAY-2026-091", name: "Marie Djoumessi", initials: "MD", amount: 10000, method: "Orange Money", date: "15 nov. 2026 · 14:31", status: "Payé" },
  { id: "PAY-2026-090", name: "Fatou Kamga", initials: "FK", amount: 5000, method: "MTN MoMo", date: "15 nov. 2026 · 13:45", status: "Payé" },
  { id: "PAY-2026-089", name: "Carine Mbala", initials: "CM", amount: 10000, method: "Orange Money", date: "15 nov. 2026 · 11:20", status: "Payé" },
  { id: "PAY-2026-088", name: "Estelle Nguemo", initials: "EN", amount: 5000, method: "MTN MoMo", date: "14 nov. 2026 · 16:08", status: "En attente" },
  { id: "PAY-2026-087", name: "Grâce Tchoumi", initials: "GT", amount: 15000, method: "Orange Money", date: "14 nov. 2026 · 09:12", status: "Payé" },
];

export const documents = [
  { id: 1, title: "Guide des bases de la pâtisserie", type: "PDF", size: "4.2 MB", updated: "14 nov. 2026", downloads: 38, color: "rose" },
  { id: 2, title: "Recettes de crèmes & garnitures", type: "PDF", size: "2.8 MB", updated: "12 nov. 2026", downloads: 26, color: "amber" },
  { id: 3, title: "Fiche technique Layer Cake", type: "PDF", size: "1.6 MB", updated: "10 nov. 2026", downloads: 19, color: "violet" },
  { id: 4, title: "Liste du matériel professionnel", type: "PDF", size: "3.1 MB", updated: "08 nov. 2026", downloads: 14, color: "emerald" },
];

export const chartData = [
  { day: "Lun", sales: 50000 }, { day: "Mar", sales: 72000 },
  { day: "Mer", sales: 65000 }, { day: "Jeu", sales: 88000 },
  { day: "Ven", sales: 104000 }, { day: "Sam", sales: 122000 },
  { day: "Dim", sales: 135000 },
];

export const formatMoney = (amount) => `${Number(amount).toLocaleString("fr-FR")} FCFA`;
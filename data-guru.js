// =====================================================
//  DATA GURU MATA PELAJARAN
//  File ini berisi daftar guru beserta mata pelajaran
//  yang diajarkan. Edit sesuai data sekolah kamu.
// =====================================================

const dataGuru = [
  {
    id: 1,
    nama: "Bpk. Ahmad Fauzi, S.Pd",
    mapel: "PKn",
    kelas: ["X RPL", "X TKJ", "XI RPL"],
    kontak: "ahmad.fauzi@sekolah.sch.id",
    jadwal: {
      senin: "07:00 – 08:30",
      rabu: "09:30 – 11:00"
    },
    foto: "👨‍🏫",
    warna: "#ff6a00"
  },
  {
    id: 2,
    nama: "Ibu Siti Rahayu, S.Pd",
    mapel: "Sejarah",
    kelas: ["X RPL", "XI DKV", "XII TKJ"],
    kontak: "siti.rahayu@sekolah.sch.id",
    jadwal: {
      selasa: "07:00 – 08:30",
      kamis: "10:00 – 11:30"
    },
    foto: "👩‍🏫",
    warna: "#ffd700"
  },
  {
    id: 3,
    nama: "Ibu Dewi Lestari, S.Pd",
    mapel: "Bhs. Indonesia",
    kelas: ["X RPL", "X DKV", "XI RPL", "XI TKJ"],
    kontak: "dewi.lestari@sekolah.sch.id",
    jadwal: {
      senin: "09:00 – 10:30",
      kamis: "07:00 – 08:30"
    },
    foto: "👩‍🏫",
    warna: "#ff4500"
  },
  {
    id: 4,
    nama: "Bpk. Robert Susanto, S.Pd",
    mapel: "Bhs. Inggris",
    kelas: ["X RPL", "X TKJ", "XI DKV"],
    kontak: "robert.susanto@sekolah.sch.id",
    jadwal: {
      selasa: "09:30 – 11:00",
      jumat: "07:00 – 08:30"
    },
    foto: "👨‍🏫",
    warna: "#ffb347"
  },
  {
    id: 5,
    nama: "Ibu Nur Hidayah, S.Pd",
    mapel: "Matematika",
    kelas: ["X RPL", "X TKJ", "XI RPL", "XII RPL"],
    kontak: "nur.hidayah@sekolah.sch.id",
    jadwal: {
      senin: "10:30 – 12:00",
      rabu: "07:00 – 08:30",
      jumat: "09:00 – 10:30"
    },
    foto: "👩‍🏫",
    warna: "#ee0979"
  },
  {
    id: 6,
    nama: "Bpk. Sugeng Widodo, S.Pd",
    mapel: "Bhs. Jawa",
    kelas: ["X RPL", "X DKV", "XI TKJ"],
    kontak: "sugeng.widodo@sekolah.sch.id",
    jadwal: {
      rabu: "10:00 – 11:30",
      jumat: "10:30 – 12:00"
    },
    foto: "👨‍🏫",
    warna: "#ff8c00"
  },
  {
    id: 7,
    nama: "Ibu Kartika Sari, S.T",
    mapel: "KKA",
    kelas: ["X RPL", "XI RPL"],
    kontak: "kartika.sari@sekolah.sch.id",
    jadwal: {
      selasa: "10:30 – 12:00",
      kamis: "08:30 – 10:00"
    },
    foto: "👩‍🏫",
    warna: "#ff3d00"
  },
  {
    id: 8,
    nama: "Bpk. Hendra Gunawan, S.Pd",
    mapel: "Seni Budaya",
    kelas: ["X RPL", "X TKJ", "X DKV"],
    kontak: "hendra.gunawan@sekolah.sch.id",
    jadwal: {
      senin: "13:00 – 14:30",
      kamis: "11:30 – 13:00"
    },
    foto: "👨‍🏫",
    warna: "#ffca28"
  },
  {
    id: 9,
    nama: "Ibu Rina Marlina, S.Kom",
    mapel: "Informatika",
    kelas: ["X RPL", "X TKJ", "X DKV"],
    kontak: "rina.marlina@sekolah.sch.id",
    jadwal: {
      selasa: "13:00 – 14:30",
      rabu: "13:00 – 14:30"
    },
    foto: "👩‍🏫",
    warna: "#ff6d00"
  },
  {
    id: 10,
    nama: "Bpk. Doni Prasetyo, S.Pd",
    mapel: "IPAS",
    kelas: ["X RPL", "X TKJ"],
    kontak: "doni.prasetyo@sekolah.sch.id",
    jadwal: {
      senin: "11:30 – 13:00",
      jumat: "11:30 – 13:00"
    },
    foto: "👨‍🏫",
    warna: "#ff9100"
  },
  {
    id: 11,
    nama: "Bpk. Agus Santoso, S.Pd",
    mapel: "PJOK",
    kelas: ["X RPL", "X TKJ", "XI RPL", "XI DKV"],
    kontak: "agus.santoso@sekolah.sch.id",
    jadwal: {
      rabu: "07:00 – 08:30",
      jumat: "07:00 – 08:30"
    },
    foto: "👨‍🏫",
    warna: "#ff1744"
  },
  {
    id: 12,
    nama: "Ibu Yuni Astuti, S.Kom",
    mapel: "Dasar Pemrograman",
    kelas: ["X RPL"],
    kontak: "yuni.astuti@sekolah.sch.id",
    jadwal: {
      selasa: "07:00 – 09:30",
      kamis: "07:00 – 09:30"
    },
    foto: "👩‍🏫",
    warna: "#e65100"
  },
  {
    id: 13,
    nama: "Bpk. Fajar Nugroho, S.Kom",
    mapel: "RPL Informatika",
    kelas: ["XI RPL", "XII RPL"],
    kontak: "fajar.nugroho@sekolah.sch.id",
    jadwal: {
      senin: "07:00 – 09:30",
      rabu: "10:00 – 12:30"
    },
    foto: "👨‍🏫",
    warna: "#bf360c"
  },
  {
    id: 14,
    nama: "Ibu Mega Putri, S.Ds",
    mapel: "Desain Grafis",
    kelas: ["X DKV", "XI DKV", "XII DKV"],
    kontak: "mega.putri@sekolah.sch.id",
    jadwal: {
      selasa: "10:00 – 12:30",
      kamis: "10:00 – 12:30"
    },
    foto: "👩‍🏫",
    warna: "#ffa000"
  }
];

// Export untuk digunakan di HTML
if (typeof module !== 'undefined') module.exports = dataGuru;

import Accordion from './components/Accordion';

const faqs = [
  {
    question: 'Apakah produk ini memilliki jaminan?',
    answer:
      'Ya, kami memberikan jaminan garansi selama 1 tahun untuk produk kami.',
  },
  {
    question: 'Berapa lama waktu pengiriman rata-rata?',
    answer:
      'Waktu pengiriman rata-rata antara 3-5 hari kerja, tergantung lokasi pengiriman.',
  },
  {
    question: 'Bagaimana cara mengembalikan barang yang rusak?',
    answer:
      'Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian.',
  },
];

function App() {
  return <Accordion data={faqs} />;
}

export default App;

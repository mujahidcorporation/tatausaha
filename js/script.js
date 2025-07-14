// Daftar siswa (judul + link PDF)
function loaddatasiswa(url, containerId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(containerId);

      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'datasiswa-item';

        const judul = document.createElement('h3');
        judul.textContent = item.judul;

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.textContent = '📖 Excel';
        link.className = 'btn-pdf';

        li.appendChild(judul);
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(err => console.error("Gagal memuat datasiswa:", err));
}

// Berita
function loadBerita(url, containerId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById(containerId);

      data.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'berita-item';

        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = item.nama;
        img.className = 'berita-img';

        const info = document.createElement('div');
        info.className = 'berita-info';

        const judul = document.createElement('h3');
        judul.textContent = item.nama;

        const link = document.createElement('a');
        link.href = item.lokasi;
        link.textContent = "Lihat Lokasi";
        link.target = "_blank";

        info.appendChild(judul);
        info.appendChild(link);

        wrapper.appendChild(img);
        wrapper.appendChild(info);
        container.appendChild(wrapper);
      });
    })
    .catch(err => console.error("Gagal memuat berita:", err));
}
//data guru
function loaddataguru(url, containerId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(containerId);

      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'dataguru-item';

        const judul = document.createElement('h3');
        judul.textContent = item.judul;

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.textContent = '📖 Excel';
        link.className = 'btn-pdf';

        li.appendChild(judul);
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(err => console.error("Gagal memuat dataguru:", err));
}
//data pembelajaran
function loaddatapembelajaran(url, containerId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(containerId);

      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'datapembelajaran-item';

        const judul = document.createElement('h3');
        judul.textContent = item.judul;

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.textContent = '📖 PDF';
        link.className = 'btn-pdf';

        li.appendChild(judul);
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(err => console.error("Gagal memuat datapembelajaran:", err));
}
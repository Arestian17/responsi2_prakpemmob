import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pahlawan',
  templateUrl: './pahlawan.page.html',
  styleUrls: ['./pahlawan.page.scss'],
})
export class PahlawanPage implements OnInit {
  datapahlawan: any;
  modalTambah: any;
  id: any;
  nama: any;
  kisah: any;
  
  resetModal() {
    this.id = null;
    this.nama = '';
    this.kisah = '';
  }
  
  openModalTambah(isOpen: boolean) {
    this.modalTambah = isOpen;
    this.resetModal();
    this.modalTambah = true;
    this.modalEdit = false;
  }
  
  cancel() {
    this.modal.dismiss();
    this.modalTambah = false;
    this.modalEdit = false;
    this.resetModal();
  }

  tambahpahlawan() {
    if (this.nama != '' && this.kisah != '') {
      let data = {
        nama: this.nama,
        kisah: this.kisah,
      }
      this.api.tambah(data, 'tambah.php')
        .subscribe({
          next: (hasil: any) => {
            this.resetModal();
            console.log('berhasil tambah pahlawan');
            this.getpahlawan();
            this.modalTambah = false;
            this.modal.dismiss();
          },
          error: (err: any) => {
            console.log('gagal tambah pahlawan');
          }
        })
    } else {
      console.log('gagal tambah pahlawan karena masih ada data yg kosong');
    }
  }
  async hapuspahlawan(id: any) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi',
      message: 'Apakah Data ingin dihapus?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {
            console.log('Hapus dibatalkan');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            this.api.hapus(id, 'hapus.php?id=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.getpahlawan();
                console.log('berhasil hapus data');
              },
              error: (error: any) => {
                console.log('gagal');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }
  ambilpahlawan(id: any) {
    this.api.lihat(id,
      'lihat.php?id=').subscribe({
        next: (hasil: any) => {
          console.log('sukses', hasil);
          let pahlawan = hasil;
          this.id = pahlawan.id;
          this.nama = pahlawan.nama;
          this.kisah = pahlawan.kisah;
        },
        error: (error: any) => {
          console.log('gagal ambil data');
        }
      })
  }
  modalEdit: any;

openModalEdit(isOpen: boolean, idget: any) {
  this.modalEdit = isOpen;
  this.id = idget;
  console.log(this.id);
  this.ambilpahlawan(this.id);
  this.modalTambah = false;
  this.modalEdit = true;
}
editpahlawan() {
  let data = {
    id: this.id,
    nama: this.nama,
    kisah: this.kisah
  }
  this.api.edit(data, 'edit.php')
    .subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.resetModal();
        this.getpahlawan();
        console.log('berhasil edit pahlawan');
        this.modalEdit = false;
        this.modal.dismiss();
      },
      error: (err: any) => {
        console.log('gagal edit pahlawan');
      }
    })
}
  constructor(
    private api: ApiService, 
    private modal: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getpahlawan();
  }

  getpahlawan() {
    this.api.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.datapahlawan = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

}
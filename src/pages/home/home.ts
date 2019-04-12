import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CloudinaryOptions, CloudinaryUploader } from "ng2-cloudinary";

// import { uploader } from "../../app/cloudinary.config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uploader: CloudinaryUploader;
  loading: any;

  constructor(public navCtrl: NavController) {
    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({ cloudName: 'erh96', uploadPreset: 'kraivfb1' })
    );
  }

  upload(image){
    console.log(image);
    this.loading = false;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      console.log(res);
    }
    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    this.loading = true;
  }

}

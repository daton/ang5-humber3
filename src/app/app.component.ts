import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  onBasicUpload(event) {
    //event.files == files to upload
    console.log("Se subio");
   // console.log("ESto llego "+JSON.stringify(event));
   //El siguiente si nos da la respuesta basado en la consulta realziada
   console.log(JSON.parse(event.xhr.response));
   console.log("Respuesta como string "+JSON.stringify(event.xhr.response))
}

}

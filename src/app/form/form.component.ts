import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  responseUser: string | undefined = ''
  message: string = ''
      isSuccessMessage: boolean = false;
    isRejectMessage: boolean = false;

  constructor(
    private http: HttpClient,

    ){}


  submit(){
      this.http.post<any>('http://localhost:3000/check',{ response: this.responseUser?.toLocaleLowerCase() })
      .subscribe(
        data => {
          if (data.result ==='sucess'){
            this.isRejectMessage = false
            this.isSuccessMessage = true
            this.message = 'Você está mais próximo de se juntar ao time!';
          }
        },
        error => {
          this.isSuccessMessage = false
          this.isRejectMessage = true
          this.message = "Erro"
        }
      );
    }

    cancel(){
      window.location.reload()
    }
  }



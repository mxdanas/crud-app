import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  standalone: false,
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent {

  empForm:FormGroup;
  education: string[]=[
    'Matric','Diploma','Intermediate','Graduate','Post Graduate'
  ]
  constructor(private _fb : FormBuilder,private _empService: EmployeeService, private _dialogRef:DialogRef<EmpAddEditComponent>){
    this.empForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
    })
  }

  onFormSubmit() {
 if(this.empForm.valid){
    this._empService.addEmployee(this.empForm.value).subscribe({
      next: (val:any) =>{
        alert("Employee added sucessflly");
        this._dialogRef.close();
      },
      error:(err:any)=>{
        console.log(err);
      },
    });  
 }
}

}

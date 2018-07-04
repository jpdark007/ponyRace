import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RaceService } from '../../services/race.service';

@Component({
  selector: 'app-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  raceFormGroup: FormGroup
  poneyIds

  handleSubmit(){
    this.raceService.setRace(this.raceFormGroup.value).subscribe(() => {
      console.log("Course créée");
    });
  }

  constructor(private raceService: RaceService) { }

  length(limite){

    return (control) =>{
      if (control.value.length == limite) {
        return null;
      }else{
        return{
          length: true
        }
      }
    }
  }

  ngOnInit() {
    this.raceFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, this.length(10)]),
      poneyIds: new FormControl([], [Validators.required])
    })
    this.raceFormGroup.valueChanges.subscribe(() => {
      console.log("Formulaire changé", this.raceFormGroup);
    })
  }
}

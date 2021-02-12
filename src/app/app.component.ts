import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { InputValidator } from './InputValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Conga Tasks';
  emailFormControl = new FormControl('',[InputValidator.OnlySeparatedNumbersAllowed()]);
  intArray : number[]=[];
  output :any ;

  OnClickGetInflection(){
    this.intArray = [];
    (this.emailFormControl.value).split(' ').forEach(element => {
      this.intArray.push(parseInt(element));
    });
    var sum = 0;
    this.intArray.forEach(x => sum+= x);//O(n):TimeComplexity
    var leftSum = 0;
    var leftIndex = 0;
    var inflectionIndex = Number.MIN_SAFE_INTEGER;
    for(var i =0 ;i<this.intArray.length;i++){ //O(n):TimeComplexity
      leftSum+= this.intArray[i];
      if(leftSum === sum/2){
        leftIndex = i;
        inflectionIndex = leftIndex;
        break;
      }
      else {
        inflectionIndex = -1;
      }
    }
    var rightSum =0;
    if(inflectionIndex != Number.MIN_SAFE_INTEGER){
      for(var i = leftIndex +1 ;i<this.intArray.length;i++){ //O(n):TimeComplexity
        rightSum+= this.intArray[i]; 
      }
      if (rightSum == leftSum){
        inflectionIndex = leftIndex;
      }
    }
    this.output = inflectionIndex;
  }
  OnClickGetMaxDrop(){
    this.intArray = [];
    (this.emailFormControl.value).split(' ').forEach(element => {
      this.intArray.push(parseInt(element));
    });
    var maxPriceDrop = 0;
    var drop = 0;
    var initialPrice = this.intArray[0];
    var previousValue = 0;
    for(var i =1;i<this.intArray.length ;i++){ //O(n)
      if( previousValue< this.intArray[i]){
        initialPrice = this.intArray[i];
      }
      if(initialPrice > this.intArray[i])
      drop = initialPrice - this.intArray[i];
      if(maxPriceDrop < drop ){
        maxPriceDrop = Math.max(maxPriceDrop,drop);
      }
      
      previousValue = this.intArray[i];
    } 
    this.output = maxPriceDrop;
  }
}

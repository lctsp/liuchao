import { Component, OnInit } from '@angular/core';

interface StudentScore{
  name:string,
  grade:string,
  Englishscore:number,
  Mathscore:number,
  random?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  scores:Array<StudentScore>;
  firstLine:string;
  constructor() {
   this.getScores()
   this.desc()
   this.firstLine =`第一个名是：${this.scores[0].name}`
  }
  
  getScores(){
     this.scores = [
      {name:"Steven",grade:"一年一班",Englishscore:60,Mathscore:80,random:Math.random()},
      {name:"Simon",grade:"一年一班",Englishscore:80,Mathscore:94,random:Math.random()},
      {name:"Alen",grade:"一年一班",Englishscore:85,Mathscore:99,random:Math.random()},
      {name:"Smith",grade:"一年一班",Englishscore:86,Mathscore:80,random:Math.random()},
      {name:"Eava",grade:"一年一班",Englishscore:60,Mathscore:80,random:Math.random()},
      {name:"Vender",grade:"一年一班",Englishscore:80,Mathscore:94,random:Math.random()},
      {name:"Lucy",grade:"一年一班",Englishscore:85,Mathscore:99,random:Math.random()}
    ]
    
  }

  addStudent(){
    let newStu = {name:"Lily",grade:"一年一班",Englishscore:90,Mathscore:80};
    this.scores.push(newStu)
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.scores.sort((a,b) => {
       let aSco=a.Englishscore+a.Mathscore;
       let bSco=b.Englishscore+b.Mathscore;
        if(aSco>bSco){
              return 1;
        }else{
            return -1
        }
    }
  )
}


  desc(){
     this.scores.sort((a,b) => {
       let aSco=a.Englishscore+a.Mathscore;
       let bSco=b.Englishscore+b.Mathscore;
        if(aSco<bSco){
              return 1;
        }else{
            return -1
        }
    }
  )
  }
  random(){
    this.scores.sort((a,b) => {
        if(a.random<b.random){
              return 1;
        }else{
            return -1
        }
    })
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  ngOnInit() {
  }

}

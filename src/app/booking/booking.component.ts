import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {


  
  // constructor(private http:HttpClient){}

  // Names:String="";
  // Emails:String="";
  // Numbers:String="";
  // Message:String="";
  // message()
  // {
  //   let names:any=this.Names;
  //   let namespattern=/^[A-Za-z\s]+$/;
  //   let namestest=namespattern.test(names);
  //   let emails:any=this.Emails;
  //   let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   let emailstest=emailspattern.test(emails);
  //   let numbers:any=this.Numbers;
  //   let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  //   let numberstest=numberspattern.test(numbers);
  //   let msg:any=this.Message;
  //   let messagepattern=/^[A-Za-z\s]+$/;
  //   let msgtest=messagepattern.test(msg);
  //   if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  //   {
  //       const list={
  //    'Name':this.Names,
  //   'email':this.Emails,
  // 'Number':this.Numbers,
  //   'Message':this.Message
  // }
  // let count:any=localStorage.getItem('Id');
  //   if(count==null||count==0)
  //   {
  //         count=1;
  //         localStorage.setItem('Count',count);
  //         let url:String="https://retoolapi.dev/B163hL/wedding";
  //       this.http.put("https://retoolapi.dev/B163hL/wedding"+count,list).subscribe(
  //       ()=>{
  
  //         alert("Message sent successfully... we will get to you soon.. ");
  //     },
  //     err=>{
  //       let a:any=Number(localStorage.getItem('Count'));
  //       a--;
  //       console.log(err);
  //       alert("Error Occured Please Try Again Later...");
  //     })}
  //   else
  //   {
  //       let a:any=Number(localStorage.getItem('Count'));
  //       a++;
  //       let url:String="https://retoolapi.dev/B163hL/wedding";
  //       localStorage.setItem('Id',a);
  //       this.http.put("https://retoolapi.dev/B163hL/wedding"+a,list).subscribe(
  //       ()=>{
  //       alert("Message sent successfully... we will get to you soon.. ");
  //     },
  //     err=>{
  //       let a:any=Number(localStorage.getItem('Count'));
  //       a--;
  //       console.log(err);
  //       alert("Error Occured Please Try Again Later...");
  //     })}
  //    this.Names="";
  //    this.Emails="";
  //    this.Numbers="";
  //    this.Message="";
  // }
  // else
  // {
  //   alert("Something Caught Wrong.. Please check the Entered Details");
  // }
  // console.log(namestest,numberstest,emailstest,msgtest);

  // }


  constructor(private http:HttpClient){}
  Names:String="";
  Emails:String="";
  Numbers:String="";
  Message:String="wedding";
  dates:string="";
  Names1:String="";
  Emails1:String="";
  Numbers1:String="";
  Message1:String="Bachelor Party";
  dates1:string="";
  Names2:String="";
  Emails2:String="";
  Numbers2:String="";
  Message2:String="Birthday Party";
  dates2:string="";
  Names3:String="";
  Emails3:String="";
  Numbers3:String="";
  Message3:String="Wedding Anniversary";
  dates3:string="";
  Names4:String="";
  Emails4:String="";
  Numbers4:String="";
  Message4:String="Engagement";
  dates4:string="";
  Names5:String="";
  Emails5:String="";
  Numbers5:String="";
  Message5:String="Mehendi";
  dates5:string="";
  message()
  {
    let names:any=this.Names;
    let namespattern=/^[A-Za-z\s]+$/;
    let namestest=namespattern.test(names);
    let emails:any=this.Emails;
    let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailstest=emailspattern.test(emails);
    let numbers:any=this.Numbers;
    let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
    let numberstest=numberspattern.test(numbers);
    let msg:any=this.Message;
    let messagepattern=/^[A-Za-z\s]+$/;
    let msgtest=messagepattern.test(msg);
    if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
    {
        const list={
     'Name':this.Names,
    'email':this.Emails,
  'Mobile No':this.Numbers,
    'Event Name':this.Message,
    'Event Date':this.dates
  }
  let count:any=localStorage.getItem('Count');
    if(count==null||count==0)
    {
          count=1;
          localStorage.setItem('Count',count);
          let url:String="https://retoolapi.dev/QYCTvp/weddings";
        this.http.put("https://retoolapi.dev/QYCTvp/weddings/"+count,list).subscribe(
        ()=>{
  
          alert("Message sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Count'));
        a--;
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
    else
    {
        let a:any=Number(localStorage.getItem('Count'));
        a++;
        let url:String="https://retoolapi.dev/QYCTvp/weddings";
        localStorage.setItem('Id',a);
        this.http.put("https://retoolapi.dev/QYCTvp/weddings/"+a,list).subscribe(
        ()=>{
        alert("Message sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Count'));
        a--;
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
     this.Names="";
     this.Emails="";
     this.Numbers="";
     this.dates="";
  }
  else
  {
    alert("Something Caught Wrong.. Please check the Entered Details");
  }
  console.log(namestest,numberstest,emailstest,msgtest);
}



message1()
{
  let names1:any=this.Names1;
  let namespattern=/^[A-Za-z\s]+$/;
  let namestest=namespattern.test(names1);
  let emails1:any=this.Emails1;
  let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailstest=emailspattern.test(emails1);
  let numbers1:any=this.Numbers1;
  let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  let numberstest=numberspattern.test(numbers1);
  let msg1:any=this.Message1;
  let messagepattern=/^[A-Za-z\s]+$/;
  let msgtest=messagepattern.test(msg1);
  if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  {
      const list={
   'Name':this.Names1,
  'email':this.Emails1,
'Mobile No':this.Numbers1,
  'Event Name':this.Message1,
  'Event Date':this.dates1
}
let count:any=localStorage.getItem('Count');
  if(count==null||count==0)
  {
        count=1;
        localStorage.setItem('Count',count);
        let url:String="https://retoolapi.dev/82qn67/bachelor_party";
      this.http.put("https://retoolapi.dev/82qn67/bachelor_party/"+count,list).subscribe(
      ()=>{

        alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
  else
  {
      let a:any=Number(localStorage.getItem('Count'));
      a++;
      let url:String="https://retoolapi.dev/82qn67/bachelor_party";
      localStorage.setItem('Id',a);
      this.http.put("https://retoolapi.dev/82qn67/bachelor_party/"+a,list).subscribe(
      ()=>{
      alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
   this.Names1="";
   this.Emails1="";
   this.Numbers1="";
   this.dates1="";
}
else
{
  alert("Something Caught Wrong.. Please check the Entered Details");
}
console.log(namestest,numberstest,emailstest,msgtest);
}




message2()
{
  let names2:any=this.Names2;
  let namespattern=/^[A-Za-z\s]+$/;
  let namestest=namespattern.test(names2);
  let emails2:any=this.Emails2;
  let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailstest=emailspattern.test(emails2);
  let numbers2:any=this.Numbers2;
  let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  let numberstest=numberspattern.test(numbers2);
  let msg2:any=this.Message2;
  let messagepattern=/^[A-Za-z\s]+$/;
  let msgtest=messagepattern.test(msg2);
  console.log(namestest,emailstest,numberstest,msgtest);
  
  if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  {
      const list={
   'Name':this.Names2,
  'email':this.Emails2,
'Number':this.Numbers2,
  'Event Name':this.Message2,
  'Event Date':this.dates2
}
let count:any=localStorage.getItem('Count');
  if(count==null||count==0)
  {
        count=1;
        localStorage.setItem('Count',count);
        let url:String="https://retoolapi.dev/9m9VwB/Birtrhday";
      this.http.put("https://retoolapi.dev/9m9VwB/Birtrhday/"+count,list).subscribe(
      ()=>{

        alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
  else
  {
      let a:any=Number(localStorage.getItem('Count'));
      a++;
      let url:String="https://retoolapi.dev/9m9VwB/Birtrhday";
      localStorage.setItem('Id',a);
      this.http.put("https://retoolapi.dev/9m9VwB/Birtrhday/"+a,list).subscribe(
      ()=>{
      alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
   this.Names2="";
   this.Emails2="";
   this.Numbers2="";
   this.dates2="";
}
else
{
  alert("Something Caught Wrong.. Please check the Entered Details");
}
console.log(namestest,numberstest,emailstest,msgtest);
}



message3()
{
  let names3:any=this.Names3;
  let namespattern=/^[A-Za-z\s]+$/;
  let namestest=namespattern.test(names3);
  let emails3:any=this.Emails3;
  let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailstest=emailspattern.test(emails3);
  let numbers3:any=this.Numbers3;
  let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  let numberstest=numberspattern.test(numbers3);
  let msg3:any=this.Message3;
  let messagepattern=/^[A-Za-z\s]+$/;
  let msgtest=messagepattern.test(msg3);
  console.log(namestest,emailstest,numberstest,msgtest);
  
  if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  {
      const list={
   'Name':this.Names3,
  'email':this.Emails3,
'Number':this.Numbers3,
  'Event Name':this.Message3,
  'Event Date':this.dates3
}
let count:any=localStorage.getItem('Count');
  if(count==null||count==0)
  {
        count=1;
        localStorage.setItem('Count',count);
        let url:String="https://retoolapi.dev/dQUgs7/Anniversary";
      this.http.put("https://retoolapi.dev/dQUgs7/Anniversary/"+count,list).subscribe(
      ()=>{

        alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
  else
  {
      let a:any=Number(localStorage.getItem('Count'));
      a++;
      let url:String="https://retoolapi.dev/dQUgs7/Anniversary";
      localStorage.setItem('Id',a);
      this.http.put("https://retoolapi.dev/dQUgs7/Anniversary/"+a,list).subscribe(
      ()=>{
      alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
   this.Names3="";
   this.Emails3="";
   this.Numbers3="";
   this.dates3="";
}
else
{
  alert("Something Caught Wrong.. Please check the Entered Details");
}
console.log(namestest,numberstest,emailstest,msgtest);
}



message4()
{
  let names4:any=this.Names4;
  let namespattern=/^[A-Za-z\s]+$/;
  let namestest=namespattern.test(names4);
  let emails4:any=this.Emails4;
  let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailstest=emailspattern.test(emails4);
  let numbers4:any=this.Numbers4;
  let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  let numberstest=numberspattern.test(numbers4);
  let msg4:any=this.Message4;
  let messagepattern=/^[A-Za-z\s]+$/;
  let msgtest=messagepattern.test(msg4);
  console.log(namestest,emailstest,numberstest,msgtest);
  
  if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  {
      const list={
   'Name':this.Names4,
  'email':this.Emails4,
'Number':this.Numbers4,
  'Event Name':this.Message4,
  'Event Date':this.dates4
}
let count:any=localStorage.getItem('Count');
  if(count==null||count==0)
  {
        count=1;
        localStorage.setItem('Count',count);
        let url:String="https://retoolapi.dev/AscR9U/Engagement";
      this.http.put("https://retoolapi.dev/AscR9U/Engagement/"+count,list).subscribe(
      ()=>{

        alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
  else
  {
      let a:any=Number(localStorage.getItem('Count'));
      a++;
      let url:String="https://retoolapi.dev/AscR9U/Engagement";
      localStorage.setItem('Id',a);
      this.http.put("https://retoolapi.dev/AscR9U/Engagement/"+a,list).subscribe(
      ()=>{
      alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
   this.Names4="";
   this.Emails4="";
   this.Numbers4="";
   this.dates4="";
}
else
{
  alert("Something Caught Wrong.. Please check the Entered Details");
}
console.log(namestest,numberstest,emailstest,msgtest);
}


message5()
{
  let names5:any=this.Names5;
  let namespattern=/^[A-Za-z\s]+$/;
  let namestest=namespattern.test(names5);
  let emails5:any=this.Emails5;
  let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailstest=emailspattern.test(emails5);
  let numbers5:any=this.Numbers5;
  let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
  let numberstest=numberspattern.test(numbers5);
  let msg5:any=this.Message5;
  let messagepattern=/^[A-Za-z\s]+$/;
  let msgtest=messagepattern.test(msg5);
  console.log(namestest,emailstest,numberstest,msgtest);
  
  if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
  {
      const list={
   'Name':this.Names5,
  'email':this.Emails5,
'Number':this.Numbers5,
  'Event Name':this.Message5,
  'Event Date':this.dates5
}
let count:any=localStorage.getItem('Count');
  if(count==null||count==0)
  {
        count=1;
        localStorage.setItem('Count',count);
        let url:String="https://retoolapi.dev/DsSq0S/Mehendi";
      this.http.put("https://retoolapi.dev/DsSq0S/Mehendi/"+count,list).subscribe(
      ()=>{

        alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
  else
  {
      let a:any=Number(localStorage.getItem('Count'));
      a++;
      let url:String="https://retoolapi.dev/DsSq0S/Mehendi";
      localStorage.setItem('Id',a);
      this.http.put("https://retoolapi.dev/DsSq0S/Mehendi/"+a,list).subscribe(
      ()=>{
      alert("Message sent successfully... we will get to you soon.. ");
    },
    err=>{
      let a:any=Number(localStorage.getItem('Count'));
      a--;
      console.log(err);
      alert("Error Occured Please Try Again Later...");
    })}
   this.Names5="";
   this.Emails5="";
   this.Numbers5="";
   this.dates5="";
}
else
{
  alert("Something Caught Wrong.. Please check the Entered Details");
}
console.log(namestest,numberstest,emailstest,msgtest);
}

}

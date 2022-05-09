

function data(){
   var nama = document.getElementById('nama_in').value;
   var nim = document.getElementById('nim').value;
   var mk = document.getElementById('mk').value;
   var m1 = document.getElementById('n1').value;
   var m2 = document.getElementById('n2').value;
   var m3 = document.getElementById('n3').value;
   var m4 = document.getElementById('n4').value;
   var m5 = document.getElementById('n5').value;
   var m6 = document.getElementById('n5').value;
   var m7 = document.getElementById('n7').value;

   tugas1 = 0.1*m1;
   tugas2 = 0.1*m2;
   tugas3 = 0.1*m3;
   tugas4 = 0.1*m4;
   tugas5 = 0.1*m5;
   uts = 0.25*m6;
   uas = 0.25*m7;

   jumlah = tugas1 + tugas2 + tugas3 + tugas4 + tugas5 + uts + uas;

   var grade;

     if(jumlah >=80)
    {
    grade= "A" ;
    com = "LULUS";
    }
    else if (jumlah >=76)
    {
    grade= "B+" ;
    com = "LULUS";
    }

    else if (jumlah >=70)
    {
    grade= "B" ;
    com = "LULUS";
    }
    else if (jumlah >=65)
    {
    grade= "C+" ;
    com = "LULUS";
    }
    else if (jumlah >=60)
    {
    grade= "C" ;
    com = "LULUS";
    }
    else if (jumlah >=50)
    {
    grade= "D" ;
    com = "TIDAK LULUS";
    }
    else
    {
    grade="E" ;
    com = "TIDAK LULUS";
    }

   document.getElementById("nama_out").innerHTML="Nama : "+nama;
   document.getElementById("nim_out").innerHTML="NIM : "+nim;
   document.getElementById("mk_out").innerHTML="Mata Kuliah : "+mk;
   document.getElementById("jumlah_out").innerHTML="Jumlah : "+jumlah;
   document.getElementById("grade_out").innerHTML="Grade : "+grade+"</br>"+com;
}


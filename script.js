var z = document.getElementById('pop');
function succe(){
    const p = document.getElementById('dumm');
    if(p.value != ''){
        const v = document.getElementById('opts');
        v.disabled=false;
    }
    else{
        alert('Enter your class');
    }
}

function loadopts(){
    var optn = document.getElementById('opts');
    var carr = optn.value;
    // console.log(carr);
    if(carr=='eng'){
        z.innerHTML='<h2>To enter any engineering college, first enrol in the MPC stream.</h2><h3>Following that, the student must take one of the following entrance exams.<br>            The following link will direct you to the EamCet application form.<br>            <a href="https://sche.ap.gov.in/EAPCET/EapcetHomePages/Home.aspx">Click</a> here to apply for EamCet            <br>            <br>            <a href="https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-india-accepting-ap-eamcet">Click here</a> for collages based on EamCet.        </h3><h3>The following link will direct you to the MAINS application form.<br><a href="https://sche.ap.gov.in/EAPCET/EapcetHomePages/Home.aspx">Click</a> here to apply<br>        <br>        <a href="https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-india-accepting-jee-main">Click here</a> for collages based on MAINS.    </h3>  <h3>The following link will direct you to the ADVANCE application form.<br>(ONLY ACCEPTS APPLICATIONS IF QUALIFIED IN MAINS)<br><a href="https://sche.ap.gov.in/EAPCET/EapcetHomePages/Home.aspx">Click</a> here to apply            <br>            <br>            <a href="https://www.shiksha.com/engineering/articles/iits-in-india-blogId-12884">Click here</a> for collages based on ADVANCE.        </h3>';
    }else if(carr=='doc'){
        z.innerHTML='<h2>To enter any medical college, first enrol in the BIPC stream.</h2><br>        <h3>            Following that, the student must take the following entrance exams.<br>            <a href="https://neet.nta.nic.in/">Click</a>here to apply for NEET.<br>            <a href="https://medicine.careers360.com/colleges/list-of-medical-colleges-in-india-accepting-neet">Click here</a> for collages based on NEET.        </h3>';
    }
    else if(carr=='as'){
        z.innerHTML='<h2>To become an IPS/IAS first you need to enrol in the HEC stream</h2><br>        <h3>            Prerequisite are any bachelors degree.<br>            <a href="https://www.manyagroup.com/admissions/ug-in-india/">Click</a>here know more about degrees available.<br>            <a href="https://www.upsc.gov.in/">Click here</a> to apply for UPSC exams.        </h3>';
    }

}

var select = document.getElementById('arr');
var text = select.options[select.selectedIndex].text;
if (text== "select data" || text== "State Unassigned") {
  alert("Select valid option");
} else {
  console.log(text);
  GFG_Fun2(text);
}

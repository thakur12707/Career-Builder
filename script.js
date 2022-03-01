var down = document.getElementById('gfg');


async function loadNames() {
  var response = await fetch(url1);
  const names = await response.json();
  states = Object.keys(names);
  GFG_Fun(states);
}

function GFG_Fun(elmts) {
  for (var i = 0; i < elmts.length; i++) {
      var optn = elmts[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select.appendChild(el);
  }

}

async function loadNames2() {
  var select = document.getElementById('arr');
  var text = select.options[select.selectedIndex].text;
  if (text== "select data" || text== "State Unassigned") {
    alert("Select valid option");
  } else {
    console.log(text);
    GFG_Fun2(text);
  }
}

async function GFG_Fun2(elmts) {
  var response = await fetch(url1);
  const names = await response.json();
  const dists = Object.keys(names[elmts]['districtData']);
  for (var i = 0; i < dists.length; i++) {
      var optn = dists[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select2.appendChild(el);
  }
}
async function covidInfo(){
  var response = await fetch(url1);
  const names = await response.json();
  var select = document.getElementById('arr');
  var text1 = select.options[select.selectedIndex].text;
  var select2 = document.getElementById('arr2');
  var text2 = select2.options[select2.selectedIndex].text;
  const dataa = Object.keys(names[text1]['districtData'][text2]);
  console.log(dataa);
  const total = names['Andhra Pradesh']['districtData']['Vizianagaram']['confirmed'] ;
  const active = names['Andhra Pradesh']['districtData']['Vizianagaram']['active'] ;
  const recovered = names['Andhra Pradesh']['districtData']['Vizianagaram']['recovered'] ;
  const deceased = names['Andhra Pradesh']['districtData']['Vizianagaram']['deceased'] ;
  const Dtotal= names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['confirmed'] ;
  const Drecovered = names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['recovered'] ;
  const Ddeceased= names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['deceased'] ;
  document.getElementById('covidData').innerHTML = '<h2>Covid Details</h2> <br/><br/>'+'Total :'+total+'<br/><br/>Active :'
  +active+'<br/><br/>Recovered :'+recovered+'<br/><br/>Deceased :'+deceased+'<br/><br/><h2>Delta variant details:</h2><br/><br/>'+
  'Total :'+Dtotal+'<br/><br/>Recovered :'+Drecovered+'<br/><br/>Deceased :'+Ddeceased;
}


// --------------------------------------------

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
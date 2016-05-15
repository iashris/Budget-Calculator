var bhk;
var area;
var costo;
var topics=["Essentials","Designer False Ceiling","Bed and Mattresses","Basic Electrical","Bathroom","Furnishing","Decor","Designer Lights","Furniture","AC"];
var cost1=[694,154,191,48,37,47,28,24,109,134];
var cost2=[680,134,191,41,37,47,28,24,109,134];
var cost3=[634,104,171,39,31,39,24,19,109,89];
var desca2=["Wardrobe and Dressing in MBR, Wardrobe and Study in KBR, Kitchen Main Platform, Parallel platform, Overhead cabinets \
in Kitchen, 8 large SS baskets, Large Crockery + Microwave + Storage + Overhead cabinets, TV Unit, Shoe Rack, Painting, Required \
Electrical Changes with material.","False Ceiling with LED panel lights (12W, 20 nos), Spot/Focus lights (3W 20 Nos) and indirect lighting using LED rope light \
(40 mt)","1 King Size with 2 extra large storage drawers (4 ft width and 2.5 ft depth) and 1 Queen Size with Hydraulic opening for \
storage, Designer head board, and 1 side table with drawer foreach bed+2 premium mattresses from MM foam/Kurl On/Equivalent Brand","5 Fans (3 Metallic Finish, 2 Non-metallic), 9 CFL Tube lights, 2 15 Lt Geysers, 4 Mirror Lights. 2 Exhaust(includes fitting \
charges)","2 Plywood boxes (2 ft x 2.5 ft) for storage with glass shelves and mirror on shutter - Above wash basin, Towel Rod, Soap \
Dish, Napkin Holder, Toilet role holder, 4 hooks, CornerShelfs, Wet Cloth Hanger (includes fitting charges)","Curtains from HECHPE Curated designs (D-Decor and SJ), SS Curtain Rods, Brackets, Designer Finials, Required Accessories \
(includes fitting and stitching charges)","HECHPE Curated collection","3 designer lights from HECHPE Curated collection","1 L-Shape 7-seater sofa, 6-seater Dining and Centre Table","1.5T and 1T AC for two bedroom that includes delivery, stabilizer, angles, fittings and all required coordination"];
var desca3=["Wardrobe in GBR","False Ceiling in GBR + 4 Nos 12W LED + 4 Nos Spot Lights + LED Rope Light (10 mt)","1 Queen Size Bed with Hydraulic opening for storage + 1 premium mattress from MM foam/KurlOn/Equivalent Brand"," Fan in GBR, Geyser in 3rd Bathroom (if available)","Designer Mirror, Towel Rod, Soap Dish, Napkin Holder, Toilet role holder, 4 hooks, CornerShelfs in 3rd \
Bathroom","","","one extra","","1.5T AC (Diakin)"];
function loadq(){
	console.log("ouch");
	$('#main-area').html('<div class="question">What size is your apartment?</div><div class="options"><div class="opt opt1" onclick="i2bhk();">2BHK</div><div class="opt opt2" onclick="i3bhk();">3BHK</div></div><button class="btn btn-primary" onclick="loadq2();" style="margin-top:30px">Next</button>');
}
function loadq2(){
	console.log("ouch");
	$('#main-area').html('<div class="question">What is the area of your Apartment?</div><div class="options"><input id="vall" type="text" placeholder="2000" class="form-control col-md-2" style="width:auto;"><select id="uni" class="form-control col-md-2" style="width:auto;"><option value="sft">Square Feet</option><option value="sqm">Square Meters</option></select><br><br><button class="btn btn-primary" onclick="gen();" style="margin-top:30px">Generate Results</button></div></div>');
}
function i2bhk(){
	console.log("booooo");
	bhk=2;
	$('.opt1').css("background-color","white");
	$('.opt1').css("color","#3ebc88");
	$('.opt2').css("background-color","#3ebc88");
	$('.opt2').css("color","#222");

}
function i3bhk(){
	console.log("bo");
	bhk=3;
	console.log(bhk);
	$('.opt2').css("background-color","white");
	$('.opt2').css("color","#3ebc88");
	$('.opt1').css("background-color","#3ebc88");
	$('.opt1').css("color","#222");
}
function gen(){
	area=$('#uni').val()=="sft"?parseInt($('#vall').val()):parseInt($('#vall').val())*10.7639;
	if((bhk==2 && area<1000)||(bhk==3 && area<1300)){
		msg="Please review your input. Your "+bhk.toString()+"BHK Apartment is too small for Estimation. \nRecommended for 2BHK: Min 1000 Sqft and Max 1300 Sqft. \nRecommended for 3BHK: Min 1300 Sqft and Max 1600 Sqft";
		console.log(area);
		alert(msg);
	}
	else if((bhk==2 && area>1300)||(bhk==3 && area>1600)){
		msg="Please review your input. Your "+bhk.toString()+"BHK Apartment is too large for Estimation. \nRecommended for 2BHK: Min 1000 Sqft and Max 1300 Sqft. \nRecommended for 3BHK: Min 1300 Sqft and Max 1600 Sqft";
		console.log(area);
		alert(msg);
	}
	else{
		if(bhk==2){
			costo=cost3;
			var vik=desca2;

		}
		else if(area>1500){
			costo=cost1;
			var vik=[];
			for(var i=0;i<topics.length;i++){
				vik[i]=desca2[i]+" "+desca3[i];
			}
		}
		else{
			costo=cost2;
			var vik=[];
			for(var i=0;i<topics.length;i++){
				vik[i]=desca2[i]+" "+desca3[i];
			}
		}
		jihwa(costo,vik);
	}
}

function jihwa(costo,vik){

var dna="";
for(var i=0;i<topics.length;i++){
				dna+="<tr><td>"+topics[i]+"</td>"+"<td>"+vik[i]+"</td>"+"<td>"+(costo[i]*1000+500)+"</td>"+"<td><input class='checker' type='checkbox' onclick='compu();' checked></td></tr>";
			}
	
	 var gene='<div class="jk" style="text-align:center"></div><table class="table table-bordered"><thead><tr><th>Category</th><th>Description</th><th>Cost</th><th>Check</th></tr></thead><tbody>'+dna+'</tbody></table><div class="jk" style="text-align:center"></div>';

	$('#main-area').html(gene);
	compu();


}
function compu(){
	var summa=0;
	var checkr=[];
	$('.checker').each(function(){
		var mayo=this.checked?1:0;
		console.log("The mayo is "+mayo.toString());
		checkr.push(mayo);
	});
	for(var i=0;i<topics.length;i++){
		summa+=checkr[i]*(costo[i]*1000+500);
		console.log(summa);
	}
	var x=summa;
	x=x.toString();
var lastThree = x.substring(x.length-3);
var otherNumbers = x.substring(0,x.length-3);
if(otherNumbers != '')
    lastThree = ',' + lastThree;
var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

	$('.jk').html("<i style='font-size:0.8em'>Your approximate estimate is</i><h1> &#8377;"+res+"</h1> <i style='font-size:0.6em;padding-bottom:40px'>You may uncheck the categories based on your needs.</i>");
}
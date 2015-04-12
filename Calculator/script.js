/* podsvetka */
$(".numberSymbol").mouseover(function(){
	$(this).removeClass("numberOn");
	$(this).addClass("numberOff");
});

$(".numberSymbol").mouseout(function(){
	$(this).removeClass("numberOff");
	$(this).addClass("numberOn");
});

$(".numberHeight").mouseover(function(){
	$(this).removeClass("numberOnHeight");
	$(this).addClass("numberOffHeight");
});

$(".numberHeight").mouseout(function(){
	$(this).removeClass("numberOffHeight");
	$(this).addClass("numberOnHeight");
});

$(".numberWidth").mouseover(function(){
	$(this).removeClass("numberOnWidth");
	$(this).addClass("numberOffWidth");
});

$(".numberWidth").mouseout(function(){
	$(this).removeClass("numberOffWidth");
	$(this).addClass("numberOnWidth");
});

$(".symbol").mouseover(function(){
	$(this).removeClass("symbolOn");
	$(this).addClass("symbolOff");
});

$(".symbol").mouseout(function(){
	$(this).removeClass("symbolOff");
	$(this).addClass("symbolOn");
});
/* END */

/* ispolzyem fuction vmesto global */
function Calculator(){
	this.status = 0; //первая обращение к цифрам              
	this.memory = 0;
}

var pank = new Calculator();

/* proverka na tocky */
function substr_count(haystack, needle){
	var pos = 0;
	var cnt = 0;
	var offset = 0;
	var length = 0;
	
	offset--;

	while( (offset = haystack.indexOf(needle, offset+1)) != -1 ){
		if(length > 0 && (offset+needle.length) > length){
			return false;
		} else{
			cnt++;
		}
	}

	return cnt;
}

/* vvod number */
function number(data){
	var namb = $(".conclusion").html();
	namb = namb +""+ data;
	if(pank.status == 0){
		if(namb[0] == "0" && data == "0"){
		}else{
			$(".conclusion").html(data);
			pank.status = 1;
		}
	}else{
		if(data == "."){
			var pop = substr_count(namb, data);
			if(pop == 1){
				$(".conclusion").html(namb);
			}
			pank.status = 1;
		}else{
			$(".conclusion").html(namb);
			pank.status = 1;
		}
	}
}

/* dobavleniy symbol */
function action(item){
	var namb = $(".conclusion").html() + " " + item;
	$(".finding").html(namb);
	pank.status = 0;
}

/* koren */
$(".koren").click(function(){
	var namb = $(".conclusion").html();
	var kor = Math.sqrt(namb);
	$(".conclusion").html(kor);
});

/* vyvod ot ravno */
$(".anyway").click(function(){
	var namb = $(".conclusion").html();
	var finding = $(".finding").html();
	
	if(pank.status == 1){
		var aY = finding.split(' ');
		if(aY[1] == "-"){
			rezult = parseFloat(aY[0]) - parseFloat(namb);
		}else if(aY[1] == "+"){
			rezult = parseFloat(aY[0]) + parseFloat(namb);
		}else if(aY[1] == "*"){
			rezult = parseFloat(aY[0]) * parseFloat(namb);
		}else if(aY[1] == "/"){
			rezult = parseFloat(aY[0]) / parseFloat(namb);
		}
		$(".finding").html("");
		$(".conclusion").html(parseFloat(rezult.toFixed(4)));
		pank.status = 0;
		pank.memory = rezult + " " + aY[1] + " " + namb;
	}else if(pank.status == 0){
		var aY = pank.memory.split(' ');
		if(aY[1] == "-"){
			rezult = parseFloat(aY[0]) - parseFloat(aY[2]);
		}else if(aY[1] == "+"){
			rezult = parseFloat(aY[0]) + parseFloat(aY[2]);
		}else if(aY[1] == "*"){
			rezult = parseFloat(aY[0]) * parseFloat(aY[2]);
		}else if(aY[1] == "/"){
			rezult = parseFloat(aY[0]) / parseFloat(aY[2]);
		}
		$(".conclusion").html(parseFloat(rezult.toFixed(4)));
		pank.memory = rezult + " " + aY[1] + " " + aY[2];
	}
});

/* plus minus */
$(".falseSymbol").click(function(){
	var namb = $(".conclusion").html();
	if(namb != 0){
		if(namb[0] == "-"){
			$(".conclusion").html(namb.substr(1));
		}else{
			namb = "-" + namb;
			$(".conclusion").html(namb);
		}
	}
});

/* delet polnosty */
$(".delete").click(function(){
	$(".finding").html("");
	$(".conclusion").html("0");
	pank.status = 0;
});

/* clean vedenyx dannayx */
$(".clean").click(function(){
	$(".conclusion").html("0");
	pank.status = 0;
});

/* delet one symbol */
$(".one").click(function(){
	var namb = $(".conclusion").html();
	var str = namb.substring(0, namb.length - 1);
	if(pank.status != 0){
		if(str.length == 0){
			str = 0;
			pank.status = 0;
		}
		$(".conclusion").html(str);
	}
});
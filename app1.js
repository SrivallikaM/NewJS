var arr=[
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

// setting the array in localStorage

if(localStorage && localStorage.getItem("arr")==null)
{
    localStorage.setItem("arr",JSON.stringify(arr));
}

var counter=0;

//loading the tasks on page load

document.addEventListener('DOMContentLoaded',function(){
  
    var arr1=JSON.parse(localStorage.getItem("arr"));
    {
        arr1.forEach((item,index)=>
        {
            counter++;
        jQuery(`<tr id=${counter}><td><b>${item.name}</b></td><td>${item.date}</td><td class="mSpace">${item.assigned}</td></tr><br/>`).insertAfter('#0');
          
        });
    }
   
    
});

//prepending to the list on submission

document.getElementById('sub').addEventListener('click',function(){
 
    var array1=JSON.parse(localStorage.getItem("arr"));
    var task=jQuery('#task').val();
   
var assigned=jQuery('#assigned').val();
var date=jQuery('#date').val();

var dateArray=date.split('-');
var YYYY=dateArray[0];
var MM=dateArray[1];
var DD=dateArray[2];


date=`${MM}/${DD}/${YYYY}`;
var patt1=new RegExp("[\w\s0-9#]+");
var patt = new RegExp("^[a-zA-Z]+$");
if(task!=""&&patt1.test(task)&&DD!=undefined&&MM!=undefined&&YYYY!=undefined&&assigned!=""&&patt.test(assigned))
{
   
    function Task(task,date,assign)
    {
        this.name=task;
        this.date=date;
        this.assigned=assign

    }

    var obj=new Task(task,date,assigned);
    counter++;
    jQuery(`<tr id=${counter}><td><b>${obj.name}</b></td><td>${obj.date}</td><td class="mSpace">${obj.assigned}</td></tr><br/>`).insertAfter('#0'); 
array1.push(obj);
localStorage.setItem("arr",JSON.stringify(array1));
}
   

})

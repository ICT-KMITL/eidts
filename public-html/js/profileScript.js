
$(document).ready(function(){

    $('#userType').change(function() {

        //$('#firstName').val($( "#userType option:selected" ).text());
        if($('#userType').val()==1){
           // additionalInfoStaff();

        }
    });

    $('.has-event').click(function(){
          $(this).append("<div class='pulse'></div>")
          .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $('.pulse').remove();
          });
         $(".event").addClass("active");
         $(".cal").removeClass("active");
    });

    $(".close").click(function(){
          $(this).append("<div class='pulse dark'></div>")
          .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $('.pulse').remove();
          });
          $(".event").removeClass("active");
          $(".cal").addClass("active");
    });

$('.parallax').parallax();

 $('#header-slide').slider({full_width: true,height: 650});
 $('#new-slide').slider({full_width: true,height: 290});
 $('#research-slide').slider({full_width: true,height: 250});


    $('.modal-trigger').leanModal();
      var NumOfResearch = 1;
      var NumOfPaper = 1;

    $('.card__share > a').on('click', function(e){
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });







    $('#headerNav').pushpin({top: $("#headerNav").offset().top});

		//styling for datepicker
		$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 200 // Creates a dropdown of 15 years to control year
  	});

		//styling for select inputs
		$('select').material_select();

		//initialize the sideNav button for mobile
		$('.button-collapse').sideNav({
				menuWidth: 300, // Default is 240
				edge: 'left', // Choose the horizontal origin
				closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
			}
		);

		//actions at the collapsible level



		//actions for navigation links
		$(".FormTab").click(function(e){
			showFormSection();
		});

		$(".Section1Tab").click(function(e){
			showSection1();
		});

		$(".Section2Tab").click(function(e){
			showSection2();
		});
        $("#addMoreEdu").on('click', function() {




              var $eduRow = $("#projects-collection");


              var select = $('<select />', {
                'class': 'selectoption'
              });


              $(select).append($('<option value="" disabled selected>Degree </option>'));
              $(select).append($('<option value="1">High School</option>'));
              $(select).append($('<option value="2">College</option>'));
              $(select).append($('<option value="3">Bachelors degree</option><option value="4">Masters degree</option><option value="5">Doctoral Degree</option>'));

              var div = $('<div />', {
                'class': 'input-field col s2'
              });

              $(div).append(select);


            var row = $('<div />', {
                'class': 'row'
              });

                $(row).append($('<div class="col s4"><p class="collections-title"><span class="fieldLabel">Institutes Name</span><input placeholder="ABC Demonstration School" id="IntsName" type="text" /></p></div>'));
                $(row).append($('<div class="col s4"><p class="collections-title"><span class="fieldLabel">Program</span><input placeholder="Software Engineering" id="IntsName" type="text" /></p></div>'))
                $(row).append(div)

                $(row).append(' <div class="col s2"><span class="fieldLabel">Year</span><input placeholder="2005" id="IntsName" type="text" /></div>');

            var collectionItem = $('<li />', {
                'class': 'collection-item'
              });

                $(collectionItem).append(row);

              $eduRow.append(collectionItem);
                $('select').material_select();


        });

      $("#addTeachingSubject").on('click',function(){

          var $teachCollection = $("#teaching-collection");
          var collectionItem = $('<li />', {
                'class': 'collection-item'
              });
          var row = $('<div />', {
                'class': 'row'
              });
          $(row).append('<div class="input-field col s12 m4 l7"><span class="fieldLabel">Subject </span><input placeholder="Basic Electronics" id="SubjName" type="text" /></div>');
          $(row).append('<div class="input-field col s12 m4 l5"><span class="fieldLabel">Program</span><input placeholder="Computer Engineering" id="SubjProgram" type="text" /></div>');
          $(collectionItem).append(row);
          $teachCollection.append(collectionItem);

      });


        $("#addMoreProjectSupervisor").on('click', function() {
            var $projectCollection = $("#projectSuper-collection");
          var collectionItem = $('<li />', {
                'class': 'collection-item'
              });
          var row1 = $('<div />', {
                'class': 'row'
              });

            var select = $('<select />', {
                'class': 'selectoption'
              });


              $(select).append($('<option value="" disabled selected>Year option</option>'));
              $(select).append($('<option value="1">Year 3</option>'));
              $(select).append($('<option value="2">Year 4</option>'));
              $(select).append($('<option value="3">Others</option>'));

              var div = $('<div />', {
                'class': 'input-field col s12 m4 l1'
              });

              $(div).append(select);
            $(row1).append(div)


          $(row1).append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Title</span><input placeholder="Verification Concept for Embedded Platforms" id="project1-title" type="text" /></div>');

          $(row1).append('<div class="col s12 m12 l6"><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Automotive" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Varification" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Distributed System" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Database" id="proMember1" type="text" /></div></div>');
          $(row1).append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Year</span><input placeholder="2008" id="proMember1" type="text" /></div>');

            $(collectionItem).append(row1);



             var row2 = $('<div />', {
                'class': 'row'
              });
           $(row2).append('<div class="col s3"> <span class="fieldLabel">Team Member 1</span><input placeholder="Team Member" id="proMember1" type="text" /><p ><span class="fieldLabel">Team Member 2</span><input placeholder="Team Member" id="proMember1" type="text" /></p></div>');

            $(row2).append('<div class="col s3"> <span class="fieldLabel">Team Member 3</span><input placeholder="Team Member" id="proMember1" type="text" /><p ><span class="fieldLabel">Team Member 4</span><input placeholder="Team Member" id="proMember1" type="text" /></p></div>');

            $(row2).append('<div class="col s3"><span class="fieldLabel">Abstract</span><textarea id="project-abstract" placeholder="Enter your projects abstract" class="materialize-textarea" length="500"  maxlength="500" rows="6"></textarea></div>');

            $(row2).append('<div class="col s3"><br><br><form action="#"><div class="file-field input-field"><div class="waves-effect waves-light btn" id = "file-button"><i class="material-icons left">file_upload</i><span> Upload</span><input type="file"></div><div class="file-path-wrapper"><input class="file-path validate" type="text"></div></div></form></div>');


          $(collectionItem).append(row2);
          $projectCollection.append(collectionItem);
            $('select').material_select();


          });

      $("#addMoreResearch").on('click', function() {
          NumOfResearch+=1;

           var $projectCollection = $("#research-collection");
          var collectionItem = $('<li />', {
                'class': 'collection-item'
              });
          var row1 = $('<div />', {
                'class': 'row'
              });


            $(row1).append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Title</span><input placeholder="Verification Concept for Embedded Platforms" id="project1-title" type="text" /></div>');



          $(row1).append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Position</span><input placeholder="Principal Investigator" id="project1-title" type="text" /></div>');

          $(row1).append('<div class="col s12 m12 l7"><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Automotive" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Varification" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Distributed System" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Database" id="proMember1" type="text" /></div></div>');

            $(collectionItem).append(row1);



             var row2 = $('<div />', {
                'class': 'row'

              });

          //-----------fundin agency-----------//
           $(row2).append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Funding Agency</span><input placeholder="CHIST-ERA" id="proMember1" type="text" /></div>');

          //-----------year-----------//
            $(row2).append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Year</span><input placeholder="2013" id="proMember1" type="text" /></div>');

          //-----------Team member-----------//
            $(row2).append('<div class="input-field col s12 m4 l3" id="researchMember'+NumOfResearch+'-div"><span class="fieldLabel">Team Member 1</span><input placeholder="Walters Newmans" id="proMember1" type="text" /></div>');

          //-----------Team member role-----------//
            $(row2).append('<div class="input-field col s12 m4 l2" id="researchMemberRole'+NumOfResearch+'-div"><span class="fieldLabel">Role</span><input placeholder="Sub-Investigator" id="proMember1" type="text" /></div>');

          //-----------add Team member-----------//
            $(row2).append(' <div class = "input-field col s12 m4 l2"><a class="waves-effect waves-light btn" id = "addMoreResearchMember'+NumOfResearch+'"  onClick="addResearchMember('+NumOfResearch+')">Add</a></div>');
          $(collectionItem).append(row2);

          var row3 = $('<div />', {
                'class': 'row'

              });
          //-----------Abstract-----------//
          $(row3).append('<div class="col s4 "><span class="fieldLabel">Abstract</span><textarea id="project-abstract" placeholder="Enter your projects abstract" class="materialize-textarea" length="500"  maxlength="500" rows="6"></textarea></div>');
          //-----------file-----------//
            $(row3).append('<div class="col s3"><br><br><form action="#"><div class="file-field input-field"><div class="waves-effect waves-light btn" id = "file-button"><i class="material-icons left">file_upload</i><span> Upload</span><input type="file"></div><div class="file-path-wrapper"><input class="file-path validate" type="text"></div></div></form></div>');
          $(row3).append('<div id="researchMember'+NumOfResearch+'-div"></div>');


          $(collectionItem).append(row3);
          $projectCollection.append(collectionItem);
            $('select').material_select();




          });

      $("#addMorePaper").on('click', function() {

          NumOfPaper+=1;

            var $projectCollection = $("#papers-collection");
          var collectionItem = $('<li />', {
                'class': 'collection-item'
              });
          var row1 = $('<div />', {
                'class': 'row'
              });

            //------------Title------------//
            $(row1).append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Title</span><input placeholder="Verification Concept for Embedded Platforms" id="project1-title" type="text" /></div>')

            //-----------Keywords------------//
          $(row1).append('<div class="col s12 m12 l7"><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Automotive" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Varification" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Distributed System" id="proMember1" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Database" id="proMember1" type="text" /></div></div>');

          //-------------Year------------------//

          $(row1).append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Year</span><input placeholder="2013" id="proMember1" type="text" /></div>');



            $(collectionItem).append(row1);



             var row2 = $('<div />', {
                'class': 'row'
              });

          //---------------Abstract-------------//
           $(row2).append('<div class="col s4 "><span class="fieldLabel">Abstract</span><textarea id="project-abstract" placeholder="Enter your projects abstract" class="materialize-textarea" length="500"  maxlength="500" rows="6"></textarea></div>');

          //-----------------Publication----------//
            $(row2).append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Publication</span><input placeholder="Academic and Scientific Publishing" id="proMember1" type="text" /></div>');
          //-----------------Co-Author--------------//

            $(row2).append('<div class="input-field col s12 m4 l3" id="coAuthor'+NumOfPaper+'-div"><span class="fieldLabel">Co-Author 1</span><input placeholder="Walters Newmans" id="proMember1" type="text" /></div>');

          //------------add Co-author-------------//
          $(row2).append('<div class = "input-field col s12 m4 l2"><a class="waves-effect waves-light btn" id = "addMoreAuthor'+NumOfPaper+'" onclick="addMoreAuthor('+NumOfPaper+')">Add</a></div>');
          $(collectionItem).append(row2);
          var row3 = $('<div />', {
                'class': 'row'
              });

            $(row3).append('<div class="col s4"><br><br><form action="#"><div class="file-field input-field"><div class="waves-effect waves-light btn" id = "file-button"><i class="material-icons left">file_upload</i><span> Upload</span><input type="file"></div><div class="file-path-wrapper"><input class="file-path validate" type="text"></div></div></form></div>');
          $(row3).append('<div  id="paperCoAuthor'+NumOfPaper+'-div"></div>');

          $(collectionItem).append(row3);
          $projectCollection.append(collectionItem);




          });



});



function additionalInfoStaff(){

}



function addMoreAuthor(clicked_id){

    var $authorDiv = $("#coAuthor"+clicked_id+"-div");
    $authorDiv.append('<span class="fieldLabel">Co-Author</span><input placeholder="Walters Newmans" id="proMember1" type="text" />');

}


function addResearchMember(clicked_id){

    var $memberTitleDiv = $("#researchMember"+clicked_id+"-div");
    $memberTitleDiv.append('<p><span class="fieldLabel">Team Member</span><input placeholder="Walters Newmans" id="proMember1" type="text" /></p>');

    var $memberRoleDiv = $("#researchMemberRole"+clicked_id+"-div");
    $memberRoleDiv.append('<p><span class="fieldLabel">Role</span><input placeholder="Sub-Investigator" id="proMember1" type="text" /></p>');
}

function addExpertise(){

    $("#expertise-div").append('<div class="chip" id="expertise-chip">'+$('#expertise-input').val()+'<i class="material-icons">clear</i></div>');

}
function addInterests(){

    $("#interests-div").append('<div class="chip" id = "interests-chip">'+$('#interests-input').val()+'<i class="material-icons">clear</i></div>');

}



function expandAll(){
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
}

function collapseAll(){
  $(".collapsible-header").removeClass(function(){
    return "active";
  });
	$("#heirarchyTop").addClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

function saveChanges(){

	//Materialize.toast('Changes Saved.', 3000, 'rounded')
	showBottomDialog("Fix errors before saving", "Address2 -> Email: Not a valid email address.");

}

function cancelInput(){
	Materialize.toast('Cancelled.', 3000, 'rounded')
}



function showFormSection(){
	$("#Section1").css("display", "none");
	$("#Section2").css("display", "none");
	$("#FormSection").css("display", "block");

	$("#toolbarNav").css("display", "block");
	$("#toolbarNav").sideNav();

	$(".Section1Tab").removeClass(function(){
		return "active";
	});

	$(".Section2Tab").removeClass(function(){
		return "active";
	});

	$(".FormTab").addClass("active");
}

function showSection1(){
	$("#FormSection").css("display", "none");
	$("#Section2").css("display", "none");
	$("#Section1").css("display", "block");

	$("#toolbarNav").css("display", "none");

	$(".FormTab").removeClass(function(){
		return "active";
	});

	$(".Section2Tab").removeClass(function(){
		return "active";
	});

	$(".Section1Tab").addClass("active");
}

function showSection2(){
	$("#FormSection").css("display", "none");
	$("#Section1").css("display", "none");
	$("#Section2").css("display", "block");

	$("#toolbarNav").css("display", "none");

	$(".FormTab").removeClass(function(){
		return "active";
	});

	$(".Section1Tab").removeClass(function(){
		return "active";
	});

	$(".Section2Tab").addClass("active");
}

//-------------sign-in--sign-up----------------------//

$('.toggle').on('click', function() {
  $('.containerr').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.containerr').stop().removeClass('active');
});

function scrollHandler (e) {
  var sTop = $(window).scrollTop()
  var dh = $('.navbar').height()
  if (sTop >= (dh - 64)) {
    $('.nav-logo').addClass('active')
    $('.nav-desktop').addClass('active')
    $('body').addClass('active')
    $(window).off('scroll', scrollHandler)
  }
}

$(window).scroll(scrollHandler)



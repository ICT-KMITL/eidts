  $(document).ready(function(){
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
		$(".collapsibleCopyButton").on("click", function(e){
			//retrieve attribute from clicked item for processing purposes.
			var idOfClicked = $(this).attr("data-copyId");

			//alert is for demonstratin purposes only.  processing goes here.
			showModal("Demo Copy", "Copy Button Clicked. ID: " + idOfClicked);

			//prevent buttons on collapsibles from bubbling up
			e.stopPropagation();
		});

		$(".collapsibleAddButton").on("click", function(e){
			//retrieve attribute from clicked item for processing purposes.

            //$("#edu-title").text('Education Background add clicked');




			//alert is for demonstratin purposes only.  processing goes here.


			//prevent buttons on collapsibles from bubbling up
			e.stopPropagation();
		});



		$(".collapsibleRemoveButton").on("click", function(e){
			//retrieve attribute from clicked item for processing purposes.
			var idOfClicked = $(this).attr("data-removeId");

			//alert is for demonstratin purposes only.  processing goes here.
			showModal("Demo Remove", "Remove Button Clicked. ID: " + idOfClicked);

			//prevent buttons on collapsibles from bubbling up
			e.stopPropagation();
		});

		$(".collapsibleFindButton").on("click", function(e){
			showModal("Demo Find", "Find Button Clicked");
			e.stopPropagation();
		});

		$(".collapsibleClearButton").on("click", function(e){
			showModal("Demo Clear", "Clear Button Clicked");
			e.stopPropagation();
		})


		//actions at the field level
		$(".fieldCopyButton").on("click", function(e){
			showModal("Demo Copy Field", "Field Copy Button Clicked");
			e.stopPropagation();
		});

		$(".fieldAddButton").on("click", function(e){
			showModal("Demo Add Field", "Field Add Button Clicked");
		});

		$(".fieldRemoveButton").on("click", function(e){
			showModal("Demo Remove Field", "Remove Field BUtton Clicked");
		})


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




          var $eduRow = $("#edu-row");


          var select = $('<select />', {
            'class': 'selectoption'
          });


          $(select).append($('<option value="" disabled selected>Degree option</option>'));
          $(select).append($('<option value="1">High School</option>'))
          $(select).append($('<option value="2">College</option>'))
          $(select).append($('<option value="3">Bachelors degree</option>'))

          var div = $('<div />', {
            'class': 'input-field col s12 m4 l4'
          });

          $(div).append(select)

          $eduRow.append(div);
        $('select').material_select();
          $eduRow.append('<div class="input-field col s12 m4 l8"><span class="fieldLabel"> Institutes Name</span><input placeholder="Institutes Name" id="IntsName" type="text" /></div>');




        });

        $("#addMoreProjectSupervised").on('click', function() {
            var $projectRow = $("#project-row");

            $projectRow.append('<div class="input-field col s12 m4 l12"><span class="fieldLabel">Title</span><input placeholder="Title" id="FirstName" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 1</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 2</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 3</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 4</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $projectRow.append('<div class="input-field col s6"><span class="fieldLabel">Abstract</span><textarea id="meaningOfLife" class="materialize-textarea" length="500" maxlength="500"></textarea></div>');

            $projectRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Year</span><input placeholder="Year" id="proMember1" type="text" /></div>');

            $projectRow.append('<div class="input-field col s12 m4 l3"><form action="#"><div class="file-field input-field"><div class="btn"><span>File</span><input type="file"></div></div></form></div>');




          });

      $("#addMoreResearch").on('click', function() {
            var $researchRow = $("#research-row");

            $researchRow.append('<div class="input-field col s12 m4 l12"><span class="fieldLabel">Title</span><input placeholder="Title" id="FirstName" type="text" /></div>');

            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $researchRow.append('<div class="input-field col s6"><span class="fieldLabel">Abstract</span><textarea id="meaningOfLife" class="materialize-textarea" length="500" maxlength="500"></textarea></div>');

            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Year</span><input placeholder="Year" id="proMember1" type="text" /></div>');

           $researchRow.append('<div class="input-field col s12 m4 l3"><form action="#"><div class="file-field input-field"><div class="btn"><span>File</span><input type="file"></div></div></form></div>');




          });

      $("#addMorePaper").on('click', function() {
            var $paperRow = $("#paper-row");

            $paperRow.append('<div class="input-field col s12 m4 l12"><span class="fieldLabel">Title</span><input placeholder="Title" id="FirstName" type="text" /></div>');

          $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 1</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 2</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 3</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Team Member 4</span><input placeholder="Team Member" id="proMember1" type="text" /></div>');

            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s6"><span class="fieldLabel">Abstract</span><textarea id="meaningOfLife" class="materialize-textarea" length="500" maxlength="500"></textarea></div>');

            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Year</span><input placeholder="Year" id="proMember1" type="text" /></div>');

           $paperRow.append('<div class="input-field col s12 m4 l3"><form action="#"><div class="file-field input-field"><div class="btn"><span>File</span><input type="file"></div></div></form></div>');




          });



});





function addExpertise(){

    $("#expertise-div").append('<div class="chip">'+$('#expertise-input').val()+'<i class="material-icons">close</i></div>')

}

function addTeachingSubject(){
    var $teachRow = $("#teachRow");
    $teachRow.append('<div class="input-field col s12 m4 l8"><span class="fieldLabel"> Subject Title</span><input placeholder="Subject" id="IntsName" type="text" /></div>');

    $teachRow.append('<div class="input-field col s12 m4 l4"><span class="fieldLabel">Program</span><input placeholder="Program" id="IntsName" type="text" /></div>');


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

function showModal(headerText, bodyText){
	$("#modalHeader").text(headerText);
	$("#modalBody").text(bodyText);
	$("#modal-dialog").openModal({dismissable:false});
}

function showBottomDialog(headerText, bodyText){
	$("#bottomModalHeader").text(headerText);
	$("#bottomModalBody").text(bodyText);
	$("#bottom-dialog").openModal();
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

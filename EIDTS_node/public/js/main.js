$(document).ready(function() {
    jQuery("abbr.timeago").timeago();
    // $("#newstatus").keydown(function(e) {
    //     if (e.keyCode == 13) {
    //         $('#postNewStatus').submit();
    //     }
    // });

    
});

var hostname = window.location.hostname;
var socket = io.connect(hostname);

$("#newstatus").on('click', function() {
  $('#postNewStatus').submit();
});

socket.on('newStatus', function(res) {
    console.log(res.statusData);
    var time = new Date(res.statusData.time).toISOString();
    var addStatus = 
'<div id="profile-page-wall-posts" class="row">\
                  <div class="col s12">\
                      <!-- small -->\
                      <div id="profile-page-wall-post" class="card">\
                        <div class="card-profile-title">\
                          <div class="row">\
                            <div class="col s1">\
                              <img src="'+ res.statusData.image +'" alt="" class="circle responsive-img valign profile-post-uer-image">\
                            </div>\
                            <div class="col s10">\
                              <p class="grey-text text-darken-4 margin">'+ res.statusData.username +'</p>\
                              <span class="grey-text text-darken-1 ultra-small"><abbr class="timeago left" title="'+time+'"></abbr></span>\
                            </div>\
                            <div class="col s1 right-align">\
                              <i class="mdi-navigation-expand-more"></i>\
                            </div>\
                          </div>\
                          <div class="row">\
                            <div class="col s12">\
                              <p>'+ res.statusData.body +'</p>\
                            </div>\
                          </div>\
                        </div>\
                        <div class="card-action row">\
                          <div class="col s4 card-action-share">\
                            <a href="#">Like</a>\
                            <a href="#">Share</a>\
                          </div>\
                          <div class="input-field col s8 margin">\
                            <input id="profile-comments" type="text" class="validate">\
                            <label for="profile-comments" class="">Comments</label>\
                          </div>\
                        </div>\
                      </div>\
                  </div>\
                </div>';
    $('#socket').prepend(addStatus);

    var pageuser = $('#theusername').text();
    if (pageuser == res.statusData.username && pageuser != myname) {
        $('#postsOuter').prepend(addStatus);
    }
    jQuery("abbr.timeago").timeago();
});

  $(document).ready(function(){
    $('.modal-trigger').leanModal();

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
              edu = '<li class="collection-item" >\
                      <div class="row">\
                          <div class="col s3">\
                              <span class="fieldLabel">Degree</span>\
                              <select class="selectoption browser-default" name="user_edu_degree">\
                                  <option value="degree" selected>degree</option>\
                                  <option value="High School">High School</option>\
                                  <option value="College">College</option>\
                                  <option value="Bachelor\'s degree">Bachelor\'s degree</option>\
                                  <option value="Master\'s degree">Master\'s degree</option>\
                                  <option value="Doctoral Degree">Doctoral Degree</option>\
                              </select>\
                          </div>\
                          <div class="col s4">\
                              <p class="collections-title">\
                                   <span class="fieldLabel">Institute\'s Name</span>\
                                  <input placeholder="insititute_name" name="user_edu_inst_name[]" type="text" value="" />\
                              </p>\
                          </div>\
                          <div class="col s3">\
                              <p class="collections-title">\
                                   <span class="fieldLabel">Program</span>\
                                  <input placeholder="program" name="user_edu_program[]" type="text" value="" />\
                              </p>\
                          </div>\
                          <div class="col s2">\
                             <span class="fieldLabel">Graduation Year</span>\
                             <input name="user_edu_grad_year[]" type="text" value="" />\
                          </div>\
                          <input style="display:none;" value="" name="user_edu_id[]">\
                      </div>\
                  </li>'
              $eduRow.append(edu);


            //   var select = $('<select />', {
            //     'class': 'selectoption'
            //   });


            //   $(select).append($('<option value="" disabled selected>Degree option</option>'));
            //   $(select).append($('<option value="1">High School</option>'));
            //   $(select).append($('<option value="2">College</option>'));
            //   $(select).append($('<option value="3">Bachelors degree</option><option value="4">Masters degree</option><option value="5">Doctoral Degree</option>'));

            //   var div = $('<div />', {
            //     'class': 'input-field col s3'
            //   });

            //   $(div).append(select);


            // var row = $('<div />', {
            //     'class': 'row'
            //   });

            //     $(row).append($('<div class="col s6"><p class="collections-title"><span class="fieldLabel">Institutes Name</span><input placeholder="ABC Demonstration School" id="IntsName" type="text" /></p></div>'));

            //     $(row).append(div)

            //     $(row).append(' <div class="col s3"><span class="fieldLabel">Graduation Year</span><input placeholder="2005" id="IntsName" type="text" /></div>');

            // var collectionItem = $('<li />', {
            //     'class': 'collection-item'
            //   });

              
            //   $(collectionItem).append(row);

            //   $eduRow.append(collectionItem);
            //     $('select').material_select();


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

            $(row2).append('<div class="col s3"> <span class="fieldLabel">Team Member 2</span><input placeholder="Team Member" id="proMember1" type="text" /><p ><span class="fieldLabel">Team Member 2</span><input placeholder="Team Member" id="proMember1" type="text" /></p></div>');

            $(row2).append('<div class="col s4"><span class="fieldLabel">Abstract</span><textarea id="project-abstract" placeholder="Enter your projects abstract" class="materialize-textarea" length="500"  maxlength="500" rows="6"></textarea></div>');

            $(row2).append('<div class="col s2"><br><br><form action="#"><div class="file-field input-field"><div class="waves-effect waves-light btn" id = "file-button"><i class="material-icons left">file_upload</i><span> Upload</span><input type="file"></div></div></form></div>');


          $(collectionItem).append(row2);
          $projectCollection.append(collectionItem);
            $('select').material_select();


          });

      $("#addMoreResearch").on('click', function() {
            var $researchRow = $("#research-row");

          $researchRow.append('<br />');
          //----Title------//
            $researchRow.append('<div class="input-field col s6 m4 l6"><span class="fieldLabel">Title</span><input placeholder="Title" id="FirstName" type="text" /></div>');
          //------position------//
            $researchRow.append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Position</span><input placeholder="Position" id="FirstName" type="text" /></div>');
          //------Funding Agency------//

            $researchRow.append('<div class="input-field col s12 m4 l4"><span class="fieldLabel">Funding Agency</span><input placeholder="Funding Agency" id="FirstName" type="text" /></div>');
          //-------Team Member---------//
            $researchRow.append('<div id="reserchMember-div"><div class="input-field col s12 m4 l7"><span class="fieldLabel">Team Member</span><input placeholder="Team Member" id="FirstName" type="text" /></div><div class="input-field col s12 m4 l3"><span class="fieldLabel">Role</span><input placeholder="Role" id="FirstName" type="text" /></div></div>');
          //-------add button---------//
            $researchRow.append('<div class="input-field col s12 m4 l2"><a class="btn" id="addMoreProjectSupervised"><span>ADD MORE</span></a></div>');
          //-------keywords---------//
            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Keyword" id="researchKeyword1" type="text" /></div>');
           $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Keyword" id="researchKeyword2" type="text" /></div>');
          $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Keyword" id="researchKeyword3" type="text" /></div>');
          $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Keyword" id="researchKeyword4" type="text" /></div>');
          //-------Abstract---------//
            $researchRow.append('<div class="input-field col s6"><span class="fieldLabel">Abstract</span><textarea id="meaningOfLife" placeholder="Enter your papers abstract" class="materialize-textarea" length="500" maxlength="500"></textarea></div>');
          //-------Year---------//
            $researchRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Year</span><input placeholder="Year" id="proMember1" type="text" /></div>');
          //-------File---------//
            $researchRow.append('<div class="input-field col s12 m4 l3"><form action="#"><div class="file-field input-field"><div class="btn"> <i class="material-icons left">file_upload</i><span>Upload File</span><input type="file"></div></div></form></div>');




          });

      $("#addMorePaper").on('click', function() {
            var $paperRow = $("#paper-row");
           $paperRow.append('<br>');

            $paperRow.append('<div class="input-field col s12 m4 l12"><span class="fieldLabel">Title</span><input placeholder="Title" id="FirstName" type="text" /></div>');

          $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Co-Author 1</span><input placeholder="Co-Author1" id="proMember1" type="text" /></div>');
             $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Co-Author 1</span><input placeholder="Co-Author2" id="proMember1" type="text" /></div>');
             $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Co-Author 1</span><input placeholder="Co-Author3" id="proMember1" type="text" /></div>');
             $paperRow.append('<div class="input-field col s12 m4 l6"><span class="fieldLabel">Co-Author 1</span><input placeholder="Co-Author4" id="proMember1" type="text" /></div>');

            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 1</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 2</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 3</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s12 m4 l3"><span class="fieldLabel">Keyword 4</span><input placeholder="Keyword" id="proMember1" type="text" /></div>');
            $paperRow.append('<div class="input-field col s4"><span class="fieldLabel">Abstract</span><textarea id="meaningOfLife" placeholder="Enter your papers abstract" class="materialize-textarea" length="500" maxlength="500"></textarea></div>');

            $paperRow.append('<div class="input-field col s12 m4 l2"><span class="fieldLabel">Year</span><input placeholder="Year" id="proMember1" type="text" /></div>');

          $paperRow.append(' <div class="input-field col s12 m4 l3"><span class="fieldLabel">Publication</span><input placeholder="ABC Publisher" id="proMember1" type="text" /></div>');

           $paperRow.append('<div class="input-field col s12 m4 l3"><form action="#"><div class="file-field input-field"><div class="btn"><i class="material-icons left">file_upload</i><span>Upload File</span><input type="file"></div></div></form></div>');




          });



});





function addExpertise(){

    $("#expertise-div").append('<div class="chip" id="expertise-chip">'+$('#expertise-input').val()+'<i class="material-icons">clear</i></div>')

}
function addInterests(){

    $("#interests-div").append('<div class="chip" id = "interests-chip">'+$('#interests-input').val()+'<i class="material-icons">clear</i></div>')

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



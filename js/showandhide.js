    
        function show_allactivity(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#all_activity").css('display','block');
        } 
        function show_alltraining(){
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#all_training").css('display','block');
        }
        function show_pwassessment1(){
            $("#all_training").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#pw_assessment1").css('display','block');
        } 
        function show_recmanagement(){
            $("#pw_assessment1").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_training").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#rec_management").css('display','block');
        } 
        function show_volmanagement(){
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#all_training").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#vol_management").css('display','block');
        }

        function show_allnews(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#all_news").css('display','block');
        } 

        function show_pwdetails(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#pw_details").css('display','block');
        }

        function show_traassessment(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#tra_assessment").css('display','block');
        }

        function show_reltraining(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','none');
            $("#rel_training").css('display','block');
        }

        function show_relactivity(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_news").css('display','none');
            $("#rel_activity").css('display','block');
        }

        function show_relnews(){
            $("#all_training").css('display','none');
            $("#pw_assessment1").css('display','none');
            $("#rec_management").css('display','none');
            $("#vol_management").css('display','none');
            $("#all_activity").css('display','none');
            $("#all_news").css('display','none');
            $("#pw_details").css('display','none');
            $("#tra_assessment").css('display','none');
            $("#rel_training").css('display','none');
            $("#rel_activity").css('display','none');
            $("#rel_news").css('display','block');
        }

        function show_recdetails(){
            $("#rec_details").css('display','block');
            $("#bg").css('display','block');
        } 

        function hide_recdetails(){
            $("#rec_details").css('display','none');
            $("#bg").css('display','none');
        }

        function show_actdetails(){
            $("#act_details").css('display','block');
            $("#bg").css('display','block');
        } 

        function hide_actdetails(){
            $("#act_details").css('display','none');
            $("#bg").css('display','none');
        }

        function show_tradetails(){
            $("#tra_details").css('display','block');
            $("#bg").css('display','block');
        } 

        function hide_tradetails(){
            $("#tra_details").css('display','none');
            $("#bg").css('display','none');
        }

        function sums(){
            $('#sum').val = $('#score1').val+$('#score2').val+$('#score3').val;
        }

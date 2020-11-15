function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.-])/;
    return regex.test(email);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  

var prog1proc = 0;
function fillProgg1() {
    prog1proc += 10;

    if(prog1proc < 100) {
        setTimeout(fillProgg1, 500);
    } else {
        prog1proc = 100;
        jQuery(".xgb-s-1").slideUp(2000, function() {
            jQuery(".xgb-s-2").slideDown(2000, function() {
                jQuery(".xxxg-prog-val").css("width", "0%");
                jQuery(".pckv").css('width', jQuery(".pc-k-4").css("width"));
                jQuery(".pc-k-4").text("XXXXX");
                setTimeout(searchFK, 700);
            });
        });
    }
    jQuery(".xxxg-prog-val").css("width", prog1proc + "%")
    
}

function searchFK() {
    if(fkCount > fkCurr) {
        jQuery(".pc-k-1").text(makeid());
        jQuery(".pc-k-2").text(makeid());
        jQuery(".pc-k-3").text(makeid());

        fkCurr++;
        setTimeout(searchFK, 150);
    } else {
        jQuery(".xgb-s-2 .spinner").hide(1000, function() {
            jQuery(".ppxs2-text").slideUp(1000);
            jQuery(".xgb-s-2 .xgs2-cons").slideDown(1500, function() {
                jQuery(".xgs2c-p1").slideDown(500, function() {
                    jQuery(".xxxg-prog-val").css("width", "85%");
                    jQuery(".xgs2c-b1").slideDown(700, function() {
                        jQuery(".xgs2c-p2").slideDown(200, function() {
                        });
                    });
                });
            });
        })
    }
}

function step1() {
    fillProgg1();
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "fast");
}

jQuery(document).ready(function() {
    fkCount = Math.floor(Math.random() * 70) + 35;
    fkCurr = 0;
    s1block = false;

    jQuery(".pw-selector").on('click', function() {
        if(jQuery(this).attr('data-selected') === 'false' && !s1block) {
            jQuery(".pw-selector.selected").attr('data-selected', 'false');
            jQuery(".pw-selector.selected").toggleClass('selected', false);
            
            jQuery(this).attr('data-selected', 'true');
            jQuery(this).toggleClass('selected', true);
        }
    });
    
    jQuery(".xgb-s-1 .xbbt-btn").on('click', function() {
        if(jQuery(".pw-selector.selected").length) { // TODO: check email
            if(isEmail(jQuery(".bs-username-input").val())) {
                if(!s1block) {
                    s1block = true;
                    jQuery(".bs-username-input").attr("readonly", "readonly");
                    jQuery(".bs-username-input").css("cursor", "not-allowed");
                    jQuery(".xgb-s-1 .xbbt-btn").css("cursor", "not-allowed");
                    jQuery(".pw-selector").css("cursor", "not-allowed");
                    
                    step1();
                }
            } else {
               
            }
        } else {
           
        }
    });
});
$(document).ready(function () {

    // Setup wizard DOM objects
    let stepWiz_step1_schemaSelect = $("#stepWiz_step1_schemaSelect");
    let stepWiz_step2_fileSelect = $("#stepWiz_step2_fileSelect");
    let stepWiz_step3_errorCorrect = $("#stepWiz_step3_errorCorrect");
    let stepWiz_step4_importData = $("#stepWiz_step4_importData");

    let step1Content = $("#step1Content");
    let step2Content = $("#step2Content");
    let step3Content = $("#step3Content");
    let step4Content = $("#step4Content");

    let stepPanel_step0_getStarted = $("#stepPanel_step0_getStarted");
    let stepPanel_step1_schemaSelect = $("#stepPanel_step1_schemaSelect");
    let stepPanel_step2_fileSelect = $("#stepPanel_step2_fileSelect");
    let stepPanel_step3_errorCorrect = $("#stepPanel_step3_errorCorrect");
    let stepPanel_step4_importData = $("#stepPanel_step4_importData");

    // Initial panel states
    stepPanel_step1_schemaSelect.hide();
    stepPanel_step2_fileSelect.hide();
    stepPanel_step3_errorCorrect.hide();
    stepPanel_step4_importData.hide();

    // Events - these will be context specific in the fuelimport main application
    $("#completeStep0_btn").click(function () {
        stepWiz_step1_schemaSelect.removeClass("step-arrowbox").addClass("step-arrowbox-active");
        step1Content.removeClass("arrowbox-content").addClass("arrowbox-content-active");
        stepPanel_step0_getStarted.hide();
        stepPanel_step1_schemaSelect.show();
    })

    $("#completeStep1_btn").click(function () {
        stepWiz_step2_fileSelect.removeClass("step-arrowbox").addClass("step-arrowbox-active");
        step2Content.removeClass("arrowbox-content").addClass("arrowbox-content-active");
        stepPanel_step1_schemaSelect.hide();
        stepPanel_step2_fileSelect.show();
    });

    $("#completeStep2_btn").click(function () {
        stepWiz_step3_errorCorrect.removeClass("step-arrowbox").addClass("step-arrowbox-active");
        step3Content.removeClass("arrowbox-content").addClass("arrowbox-content-active");
        stepPanel_step2_fileSelect.hide();
        stepPanel_step3_errorCorrect.show();
    });

    $("#completeStep3_btn").click(function () {
        stepWiz_step4_importData.removeClass("step-arrowbox").addClass("step-arrowbox-active");
        step4Content.removeClass("arrowbox-content").addClass("arrowbox-content-active");
        stepPanel_step3_errorCorrect.hide();
        stepPanel_step4_importData.show();
    });

    $("#completeStep4_btn").click(function () {
        stepWiz_step1_schemaSelect.removeClass("step-arrowbox-active").addClass("step-arrowbox");
        step1Content.removeClass("arrowbox-content-active").addClass("arrowbox-content");
        stepWiz_step2_fileSelect.removeClass("step-arrowbox-active").addClass("step-arrowbox");
        step2Content.removeClass("arrowbox-content-active").addClass("arrowbox-content");
        stepWiz_step3_errorCorrect.removeClass("step-arrowbox-active").addClass("step-arrowbox");
        step3Content.removeClass("arrowbox-content-active").addClass("arrowbox-content");
        stepWiz_step4_importData.removeClass("step-arrowbox-active").addClass("step-arrowbox");
        step4Content.removeClass("arrowbox-content-active").addClass("arrowbox-content");
        stepPanel_step4_importData.hide();
        stepPanel_step0_getStarted.show();
    });
});
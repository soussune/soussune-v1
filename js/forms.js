$(function() {
  $('#letter-form').one('submit',function(){
    var inputq1 = encodeURIComponent($('#episode').val());
    var inputq2 = encodeURIComponent($('#twitter_id').val());
    var inputq3 = encodeURIComponent($('#message').val());
    var q1ID = "entry.286431956";
    var q2ID = "entry.1876112507";
    var q3ID = "entry.1286608194";
    var baseURL = 'https://docs.google.com/forms/d/13n0z30Q1nM_JCndajM6piDvmBgQ4zW4DNm5m98ODL88/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + submitRef);
    $(this)[0].action=submitURL;
    $('#input-feedback').text('Thank You!');
  });
})(jQuery);

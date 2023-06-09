
$('#aq_body').on('scroll', function () {
    var value_scroll = $('#aq_body').scrollTop();
    if (value_scroll > 75) {
      $('#toggle_logo').show('400');
    } else {
      $('#toggle_logo').hide('400');
    }
    $('#le_wf_snacks').scrollTop(value_scroll / 2);
    $('#le_wf_fideos').scrollTop(value_scroll / 2);
    $('#le_wf_dulces').scrollTop(value_scroll / 2);
  });

  

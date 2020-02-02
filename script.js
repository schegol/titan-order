$(document).ready(function() {
  let legalEntity = $('#orderLegalEntity');
  let companyInfoBlock = $('.company-info');
  let companyInfo = $('.company-info');
  let companyFields = $('[class$="--company"]');
  let personDelivery = $('.payment-delivery--person');
  let personFields = $('[class$="--person"]');
  let deliveryCheckbox = $('.payment-delivery__radio');
  let deliveryCheckboxLabel = $('.payment-delivery__radio-label');

  personFields.show();
  companyFields.hide();
  companyInfo.hide();

  legalEntity.on('change', function() {
    if (this.value == 'person') {
      personFields.show();
      personDelivery.show();
      companyFields.hide();
      companyInfo.hide();
    } else {
      personFields.hide();
      personDelivery.hide();
      companyFields.show();
      companyInfo.show();
    };
  });

  deliveryCheckbox.each(function() {
    if ($(this).prop('checked')) {
      $('label[for="'+$(this).attr('id')+'"]').addClass('active-label');
    };
  });

  deliveryCheckbox.click(function() {
    $('input[name="'+$(this).attr('name')+'"]').each(function() {
      $('label[for="'+$(this).attr('id')+'"]').removeClass('active-label');
    });
    $('label[for="'+$(this).attr('id')+'"]').addClass('active-label');
  });
});

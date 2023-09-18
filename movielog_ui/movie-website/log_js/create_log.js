tinymce.init({
    selector: '#mytextarea',

    a_plugin_option: true,
    a_configuration_option: 400,
    plugins: 'a_tinymce_plugin a11ychecker image advcode   casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments ',
    toolbar: 'addcomment showcomments  code casechange checklist  export  image editimage pageembed  table tableofcontents',
    toolbar_mode: 'floating',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
  });
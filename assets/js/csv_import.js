document.addEvent('domready', function ()
{
    // scroll to top
    location.hash = "#main";

    if (document.id('saveNclose'))
              document.id('saveNclose').setStyle('visibility','hidden');
       if (document.id('saveNcreate'))
              document.id('saveNcreate').setStyle('visibility','hidden');
       if (document.id('save'))
              document.id('save').setProperty('value', 'Daten in Tabelle importieren');
       
       if ($$('.header_new'))
       {
              $$('.header_new').setProperty('title', 'start a new csv-import');
       }

    if (document.id('ctrl_response_box'))
    {
        // scroll to top
        location.hash = "#main";

        // hide all fields
        $$('fieldset.tl_tbox.nolegend > div').each(function(el)
        {
            el.style.display="none";
        });

        // show response box
        document.id('ctrl_response_box').style.display = "block";

        // hide submit buttons
        $$('.tl_submit_container input').each(function(el)
        {
            el.style.visibility="hidden";
        });
    }
});
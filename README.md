# widowfix
This script removes widows from post titles in wordpress

# How does it work?
This javascript file retrieves every post title by the class '.entry-title' and if the title is longer than three words, replaces the final space with a non-breaking space (&nbsp;).

# How to use is?
1. Use the class '.entry-title' in your HTML.
2. Add this script to the footer of your document
  ```html
  <script src="widowfix.js"></script>
  ```
  or add to your theme setup function
  ```php
  wp_enqueue_script( 'widowfix', get_template_directory_uri() . '/widowfix.js', array(), '0.0.1', true );
  ```

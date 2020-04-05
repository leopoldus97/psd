window.search = {"doc_urls":["introduction.html#introduction","contributing/index.html#contributing","contributing/internal-design/index.html#internal-design","contributing/internal-design/major-sections/index.html#major-sections"],"index":{"documentStore":{"docInfo":{"0":{"body":59,"breadcrumbs":1,"title":1},"1":{"body":5,"breadcrumbs":1,"title":1},"2":{"body":36,"breadcrumbs":3,"title":2},"3":{"body":89,"breadcrumbs":5,"title":2}},"docs":{"0":{"body":"psd provides a Rust API for parsing and working with the Adobe Photoshop File Format . psd seeks to make it easy for you to write scripts that work with Photoshop files. For example, the original use case that motivated the creationg of the psd crate was to be part of a Rust script that iterated over a directory full of PSD's and combined all of them into a texture atlas (using the texture_packer crate). The Photoshop specification is large so, while we support the main parts of it, not every little bit is supported. If there's something that you'd like to get your hands on please feel free to open an issue .","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"This section dives into contributing to the psd crate.","breadcrumbs":"Contributing","id":"1","title":"Contributing"},"2":{"body":"This section discusses the internal design of the psd crate. Before reading this section it is recommended that you read through the psd specification . Reading through the spec will bring context to the organization of the codebase and the approach that we take to parsing .psd data After reading this section you should have a good sense of how everything works and be better prepared to dive into the codebase.","breadcrumbs":"Contributing » Internal Design","id":"2","title":"Internal Design"},"3":{"body":"You can think of a Photoshop file as a byte slice &[u8] . These bytes are organized into 5 major sections, each of which have their own sub-sections. We represent this in our code using the MajorSections type. // Imported into the book from `src/sections/mod.rs` pub mod image_resources_section;\npub mod image_data_section;\npub mod layer_and_mask_information_section; /// References to the different major sections of a PSD file\n#[derive(Debug)]\npub struct MajorSections<'a> { pub(crate) file_header: &'a [u8], pub(crate) color_mode_data: &'a [u8], pub(crate) image_resources: &'a [u8], pub(crate) layer_and_mask: &'a [u8], pub(crate) image_data: &'a [u8],\n} impl<'a> MajorSections<'a> { /// Given the bytes of a PSD file, return the slices that correspond to each /// of the five major sections. /// /// ┌──────────────────┐ /// │ File Header │ /// ├──────────────────┤ /// │ Color Mode Data │ /// ├──────────────────┤ /// │ Image Resources │ /// ├──────────────────┤ Our parsing comes down to reading through the bytes in this byte slice and using them to create these five major sections.","breadcrumbs":"Contributing » Internal Design » Major Sections","id":"3","title":"Major Sections"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"d":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":2.23606797749979}}}}}},"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"<":{"'":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"a":{"df":0,"docs":{},"n":{"d":{"_":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.23606797749979}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"<":{"'":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.7320508075688772}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"d":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":4,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"u":{"b":{"(":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.23606797749979}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":2,"docs":{"2":{"tf":2.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":2.449489742783178}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":0,"docs":{},"f":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"r":{"c":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"_":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"8":{"df":1,"docs":{"3":{"tf":2.449489742783178}}},"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"d":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":2.23606797749979}}}}}},"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"<":{"'":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"a":{"df":0,"docs":{},"n":{"d":{"_":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.449489742783178}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"<":{"'":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.7320508075688772}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"d":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":4,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"u":{"b":{"(":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.23606797749979}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":2,"docs":{"2":{"tf":2.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":2.6457513110645907}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":0,"docs":{},"f":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"r":{"c":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"_":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"8":{"df":1,"docs":{"3":{"tf":2.449489742783178}}},"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"a":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};
function copySubtitle() {
    var sub = mp.get_property('sub-text', '');

    if (sub) {
        mp.set_property('clipboard/text', sub);
        mp.osd_message('Copied to Clipboard');
    }
}

mp.add_key_binding('Ctrl+c', copySubtitle);
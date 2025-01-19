var wms_layers = [];
var format_Jalan_0 = new ol.format.GeoJSON();
var features_Jalan_0 = format_Jalan_0.readFeatures(json_Jalan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_0.addFeatures(features_Jalan_0);var lyr_Jalan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_0, 
                style: style_Jalan_0,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_0_0.png" /> Jalan Lintas<br />\
    <img src="styles/legend/Jalan_0_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_0_2.png" /> <br />\
    <img src="styles/legend/Jalan_0_3.png" /> JALAN<br />'
        });var format_TEMPAT_1 = new ol.format.GeoJSON();
var features_TEMPAT_1 = format_TEMPAT_1.readFeatures(json_TEMPAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPAT_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TEMPAT_1.addFeatures(features_TEMPAT_1);var lyr_TEMPAT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEMPAT_1, 
                style: style_TEMPAT_1,
    title: 'TEMPAT<br />\
    <img src="styles/legend/TEMPAT_1_0.png" /> 1<br />\
    <img src="styles/legend/TEMPAT_1_1.png" /> <br />'
        });var format_DesaIndonesia_2 = new ol.format.GeoJSON();
var features_DesaIndonesia_2 = format_DesaIndonesia_2.readFeatures(json_DesaIndonesia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_2.addFeatures(features_DesaIndonesia_2);var lyr_DesaIndonesia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_2, 
                style: style_DesaIndonesia_2,
                title: '<img src="styles/legend/DesaIndonesia_2.png" /> DesaIndonesia'
            });

lyr_Jalan_0.setVisible(true);lyr_TEMPAT_1.setVisible(true);lyr_DesaIndonesia_2.setVisible(true);
var layersList = [lyr_Jalan_0,lyr_TEMPAT_1,lyr_DesaIndonesia_2];
lyr_Jalan_0.set('fieldAliases', {'id': 'id', 'Nama_JLN': 'Nama_JLN', 'Jenis_JLN': 'Jenis_JLN', });
lyr_TEMPAT_1.set('fieldAliases', {'id': 'id', 'TEMPAT': 'TEMPAT', });
lyr_DesaIndonesia_2.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_Jalan_0.set('fieldImages', {'id': 'TextEdit', 'Nama_JLN': 'TextEdit', 'Jenis_JLN': 'TextEdit', });
lyr_TEMPAT_1.set('fieldImages', {'id': 'TextEdit', 'TEMPAT': 'TextEdit', });
lyr_DesaIndonesia_2.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_Jalan_0.set('fieldLabels', {'id': 'no label', 'Nama_JLN': 'no label', 'Jenis_JLN': 'no label', });
lyr_TEMPAT_1.set('fieldLabels', {'id': 'no label', 'TEMPAT': 'no label', });
lyr_DesaIndonesia_2.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_DesaIndonesia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
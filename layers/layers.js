var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_pleburansemarang_1 = new ol.format.GeoJSON();
var features_building_pleburansemarang_1 = format_building_pleburansemarang_1.readFeatures(json_building_pleburansemarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_pleburansemarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_pleburansemarang_1.addFeatures(features_building_pleburansemarang_1);
var lyr_building_pleburansemarang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_pleburansemarang_1, 
                style: style_building_pleburansemarang_1,
                interactive: true,
                title: '<img src="styles/legend/building_pleburansemarang_1.png" /> building_pleburan semarang '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_pleburansemarang_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_pleburansemarang_1];
lyr_building_pleburansemarang_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'covered': 'covered', 'access': 'access', 'website': 'website', 'stars': 'stars', 'rooms': 'rooms', 'reservation': 'reservation', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'image': 'image', 'email': 'email', 'description': 'description', 'brand': 'brand', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'short_name': 'short_name', 'official_name': 'official_name', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:fax': 'contact:fax', 'addr:province': 'addr:province', 'addr:country': 'addr:country', 'tourism': 'tourism', 'addr:postcode': 'addr:postcode', 'religion': 'religion', 'amenity': 'amenity', 'school:type_idn': 'school:type_idn', 'sport': 'sport', 'leisure': 'leisure', 'operator:type': 'operator:type', 'shop': 'shop', 'addr:street': 'addr:street', 'office': 'office', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_pleburansemarang_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'covered': '', 'access': '', 'website': '', 'stars': '', 'rooms': '', 'reservation': '', 'internet_access:fee': '', 'internet_access': '', 'image': '', 'email': '', 'description': '', 'brand': '', 'air_conditioning': '', 'addr:housenumber': '', 'short_name': '', 'official_name': '', 'contact:website': '', 'contact:phone': '', 'contact:fax': '', 'addr:province': '', 'addr:country': '', 'tourism': '', 'addr:postcode': '', 'religion': '', 'amenity': '', 'school:type_idn': '', 'sport': '', 'leisure': '', 'operator:type': '', 'shop': '', 'addr:street': '', 'office': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'admin_level': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_pleburansemarang_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'covered': 'no label', 'access': 'no label', 'website': 'no label', 'stars': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'image': 'no label', 'email': 'no label', 'description': 'no label', 'brand': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'short_name': 'no label', 'official_name': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:fax': 'no label', 'addr:province': 'no label', 'addr:country': 'no label', 'tourism': 'no label', 'addr:postcode': 'no label', 'religion': 'no label', 'amenity': 'no label', 'school:type_idn': 'no label', 'sport': 'no label', 'leisure': 'no label', 'operator:type': 'no label', 'shop': 'no label', 'addr:street': 'no label', 'office': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_pleburansemarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
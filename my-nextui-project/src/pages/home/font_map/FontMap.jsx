import styles from './FontMap.module.css';

import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

//import FontImage from '../../../../public/fonts/some_font_images/ABeeZee_Aa.png'

export default function FontMap({font, setFont}) {

    /* 
            "id": i, 
            "label": f'{dict_font_indices_to_labels[font_index]}',  # Fetch the label corresponding to the index
            "shape": "circularImage",  # Specify the shape of the node as a circular image
            "image": images_to_paths_dict[list(labels_to_indices_dict.keys())[list(labels_to_indices_dict.values()).index(i)]],  # Fetch the image path for the label
            "x": coordinates[0],  # Specify the x-coordinate of the node
            "y": coordinates[1],  # Specify the y-coordinate of the node
            "fixed": {"x": true, "y": True},  # Set the x and y coordinates as fixed
        },
    */
    const imagesBasePath = '/fonts/some_font_images/'

    const fonts = [
            {'id': 0,
            'name': 'ABeeZee'},
            {'id': 0,
            'name': 'Abel'}, 
            {'id': 0,
            'name': 'Abhaya-Libre'}, 
            {'id': 0,
            'name': 'Aboreto'}]

    const nodes = [{
            "id": 0, 
            "label": 'ABeeZee',
            "shape": "circularImage",  // Specify the shape of the node as a circular image
            "image": imagesBasePath+'ABeeZee'+'_Aa.png',  // Fetch the image path for the label
            "x": 100,  // Specify the x-coordinate of the node
            "y": 100,  // Specify the y-coordinate of the node
            "fixed": {"x": true, "y": true},  // Set the x and y coordinates as fixed
        },
        {
            "id": 1, 
            "label": 'Abel',
            "shape": "circularImage",  // Specify the shape of the node as a circular image
            "image": imagesBasePath+'Abel'+'_Aa.png',  // Fetch the image path for the label
            "x": 100,  // Specify the x-coordinate of the node
            "y": 0,  // Specify the y-coordinate of the node
            "fixed": {"x": true, "y": true},  // Set the x and y coordinates as fixed
        },
        {
            "id": 2, 
            "label": 'Abhaya-Libre',
            "shape": "circularImage",  // Specify the shape of the node as a circular image
            "image": imagesBasePath+'Abhaya-Libre'+'_Aa.png',  // Fetch the image path for the label
            "x": 0,  // Specify the x-coordinate of the node
            "y": 0,  // Specify the y-coordinate of the node
            "fixed": {"x": true, "y": true},  // Set the x and y coordinates as fixed
        },
        {
            "id": 3, 
            "label": 'Aboreto',
            "shape": "circularImage",  // Specify the shape of the node as a circular image
            "image": imagesBasePath+'Aboreto'+'_Aa.png',  // Fetch the image path for the label
            "x": 0,  // Specify the x-coordinate of the node
            "y": 100,  // Specify the y-coordinate of the node
            "fixed": {"x": true, "y": true},  // Set the x and y coordinates as fixed
        },
    ]

    const edges = [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 3 },
    ]
    
    
    const networkRef = useRef(null);

    useEffect(() => {
        if (networkRef.current) {
            const network = new Network(networkRef.current, { nodes, edges }, {});

            // Add event listener for node click
            network.on("click", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0]; // Get the ID of the clicked node
                    console.log("Clicked node ID:", nodeId); // Log the node ID
                    setFont(nodeId); // Update the font state in the parent component with the node ID
                }
            });
        }
    }, [nodes, edges, setFont]); // include setFont in the dependency array




    return (
    <div ref={networkRef} style={{ width: '100%', height: '100%' }}>
    </div>
    )
};
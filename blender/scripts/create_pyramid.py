import bpy

import os

script_dir = os.path.dirname(os.path.realpath(__file__))
output_path = os.path.join(script_dir, "./pyramid.gltf")

# Clear all mesh objects
bpy.ops.object.select_by_type(type='MESH')
bpy.ops.object.delete()

# Create a new mesh object
mesh = bpy.data.meshes.new(name="PyramidMesh")
obj = bpy.data.objects.new("Pyramid", mesh)

# Link the object to the scene
scene = bpy.context.scene
scene.collection.objects.link(obj)

# Create a pyramid
verts = [(1, 1, 0), (1, -1, 0), (-1, -1, 0), (-1, 1, 0), (0, 0, 2)]  # 5 vertices
faces = [(0, 1, 4), (1,  2, 4), ( 2,  3, 4), ( 3, 0, 4)]  # 4 faces

# Update the mesh with the new data
mesh.from_pydata(verts, [], faces)

# Set the pyramid material
material = bpy.data.materials.new(name="Pyramid Material")
material.use_nodes = True
nodes = material.node_tree.nodes
node = nodes.get("Principled BSDF")

# Set red color
node.inputs["Base Color"].default_value = (10, 0, 0, 1)  

# Make the material opaque
material.blend_method = 'OPAQUE'  

# Assign the material to the object
obj.data.materials.append(material)

# Export the model in GLTF format
bpy.ops.export_scene.gltf(filepath = output_path)

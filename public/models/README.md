# Portfolio 3D Model

Main 3D hero asset used by the site:

```text
public/models/drone-performance.glb
```

The site checks this exact file path:

```text
/models/drone-performance.glb
```

If the file exists, the hero loads your GLB. If it does not exist, the site uses the built-in animated 3D scene.

Original source file:

```text
public/models/drone.glb
```

Higher-quality optimized backup:

```text
public/models/drone-optimized.glb
```

Recommended export:

- Format: `.glb`
- Origin: centered at world origin
- Scale: around 1-2 meters in Blender/SketchUp export scale
- Materials: baked or simple PBR materials for faster loading
- File size: performance file is about 4.36 MB; higher-quality optimized file is about 6.38 MB; original is about 16.14 MB
- Name used by the site: exactly `drone-performance.glb`

After adding the model, run:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:5173/
```

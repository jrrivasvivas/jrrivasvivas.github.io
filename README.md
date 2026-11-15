# Jose Roberto Rivas · Engineering Portfolio

A static portfolio covering telecommunications, data analytics, and technical operations. The home page is `index.html`. The project index and case studies are in `projects/`, and `assets/` contains the styles, scripts, portrait, and licensed font.

GitHub Pages serves the root of the `main` branch. The site uses HTML, CSS, and JavaScript and runs directly in the browser.

To preview the committed site locally, run these commands from the repository root with Python 3:

```sh
preview_dir=$(mktemp -d)
git archive HEAD | tar -x -C "$preview_dir"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$preview_dir"
```

[Open the local portfolio](http://127.0.0.1:8000/)

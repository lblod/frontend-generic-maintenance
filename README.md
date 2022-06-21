# frontend-maintenance

Display a static maintenance page (`index.html`) on all paths.

Add the following snippet to your `docker-compose.yml`:

```yaml
services:
  maintenance:
    image: lblod/frontend-maintenance
```

The maintenance page is available in `/app/index.html` in the Docker container.

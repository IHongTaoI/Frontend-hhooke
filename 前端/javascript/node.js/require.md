> 排除读取
```javascript
//匹配服务端渲染不需要读取的文件
const extensions = ['.css', '.less', '.scss', 'sass', 'jpg', 'png'],
    app = express();
for (let item of extensions) {
    require.extensions[item] = () => {
        return false;
    };
}
```
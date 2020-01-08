# :bookmark: SpringBoot
## Springboot之图片下载
>以前使用`HttpServletResponse`可以通过输出流的方式来向前台输出图片。现在大部分都是使用`springboot`，在使用`springboot`之后，我们应该如何来修改代码呢？

后台直接输出字节流，前台直接通过`img`标签就可以显示

>注：`img`标签的`src`属性是可以直接加载`base64`码解析出图片

### :apple: 文件流操作返回
```java
    /**
     * 图片文件预览
     * @param data
     * @param response
     * @return
     * @exception IOException
     * */
    public static void previewImage(byte[] data,HttpServletResponse response) throws IOException {
        OutputStream out;
        out= response.getOutputStream();
        response.setContentType("image/jpeg");
        response.setCharacterEncoding("UTF-8");
        out.write(data);
        out.flush();
        out.close();
    }
```
### springboot中操作
```java
    @GetMapping(value = "/image",produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] test() throws Exception {

        File file = new File("C:\\Users\\Gaolei\\Pictures\\rabbits.png");
        FileInputStream inputStream = new FileInputStream(file);
        byte[] bytes = new byte[inputStream.available()];
        inputStream.read(bytes, 0, inputStream.available());
        return bytes;
    }

```
我们首先在`@GetMapping`上加入`produces`告诉`Spring`，我们要返回的`MediaType`是一个图片`（image/jpeg）`，然后加上`@ResponseBody`注解，方法返回`byte[]`，然后将图片读进`byte[]`，不加`produces`会报错。

#### 使用`postman`测试
![](../../image/java/exportImage.png)
这样就成功使用`springboot`导出图片了
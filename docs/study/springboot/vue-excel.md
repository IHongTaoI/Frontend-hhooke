# :bookmark:Vue中axios实现文件流下载
##  前言
后端以文件流的形式返回数据，前端多选数据导出excel文件
### :bookmark:以文件流返回
```java
		String fileName = "PersonalCertInfo";
		OutputStream out =null;
		try {
			out = response.getOutputStream();
			response.reset();
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
			response.addHeader("Content-Disposition", "attachment; filename=" + fileName + ".xlsx");
			response.setContentType("application/vnd.ms-excel;charset=utf-8");
			workbook.write(out);
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			out.flush();
			out.close();
		}
```
### :bookmark: axios请求封装

```js
   request(data) {
        let reqData = data.data || {};
        //支持表达式作为域名解析
        data.url =this.parseUrl(data.url);
        //统一拼接域名接口
        if (data.url.indexOf('http') == -1) {
            data.url = domainName + data.url;
        }
        let requestData = {
            url: data.url,
            data: reqData,
            method: data.method || 'GET',
            params: data.params || {},
            onUploadProgress: data.onUploadProgress || null,
            headers: data.headers || '',
            responseType: data.responseType || 'json'
        };
        return axios(requestData);
    },
    // 文件导出
    export(url, data){
        return this.request({ url, data, method: "POST" ,responseType:"blob"});
    }
```
### 定义`Api`接口
```js
  exportCmPersonalCertAndAttach(data, cb) {
    req.export(hse + `/sim/cmPersonalCert/v1/export`, data).then(req => {
      cb(req);
    });
  }
```
`Vuex`封装
```js
exportCmPersonalCertAndAttach({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      card.exportCmPersonalCertAndAttach(data, response => {
  resolve(response);
      });
   });
  }
```

#### 调用导出`excel`文件接口
```js
handleExport() {
      if (this.multipleSelection) {
        this.$store
          .dispatch(
            "card/exportCmPersonalCertAndAttach",
            this.multipleSelection
          )
          .then((response) => {
            let blob = new Blob([response.data]);
            let downloadElement = document.createElement("a");
            let href = window.URL.createObjectURL(blob); //创建下载的链接
            downloadElement.href = href;
            downloadElement.download = `个人证件信息表.xlsx`; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放掉blob对象
            this.$message.success(`导出成功`);
          })
          .catch(e => {
            this.$message.error(`error${e}`);
          });
      }
```
数据展示
![列表](https://img-blog.csdnimg.cn/20191114181513397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
点击导出，弹出另存为文件
![另存为](https://img-blog.csdnimg.cn/201911141841222.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
导出效果
![导出效果](https://img-blog.csdnimg.cn/20191114183901291.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)

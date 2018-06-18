// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
    install (Vue, options) {
        //判断页面是否超过一页
        Vue.prototype.getHeight = function () {
            let flag = 0
            let resumeWidth = document.getElementById("pdfDom").offsetWidth
            let resumeHeight = document.getElementById("pdfDom").offsetHeight
            let pageHeight = resumeWidth / 592.28 * 841.89
            if (resumeHeight > pageHeight) {
                flag = 1
            }
            return flag
        }
        //输出PDF文件
        Vue.prototype.getPdf = function () {
            var title = this.htmlTitle
            html2Canvas(document.querySelector('#pdfDom'), {
                allowTaint: true
            }).then(function (canvas) {
                let contentWidth = canvas.width
                let contentHeight = canvas.height
                //一页pdf显示html页面生成的canvas高度;
                let pageHeight = contentWidth / 592.28 * 841.89
                let leftHeight = contentHeight
                // 页面偏移
                let position = 0
                let imgWidth = 595.28
                let imgHeight = 592.28 / contentWidth * contentHeight
                let pageData = canvas.toDataURL('image/jpeg', 1.0)
                let PDF = new JsPDF('', 'pt', 'a4')
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89
                        PDF.addPage()
                    }
                }
                PDF.save(title + '.pdf')
            })
        }
    }
}
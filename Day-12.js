function processsingleOrder(orderId){
    return new Promise((resolve) => {
        const processTime=500+Math.random()*100+2000;
        setTimeout(() => {
            resolve({
                orderId,
                status: 'processed',
                processTime:Math.round(processTime)
            });
        }, processTime);    
            })
}

const orderBatch=['order101','order102','order103','order104'];
//promise all orders in parallel
Promise.allSettled(orderBatch.map(processsingleOrder))
.then((results)=>{
    console.log('All orders processed:');
    console.table(results);
    const totalTime=results.reduce((sum,result)=>sum+(result.status==='fulfilled'?result.value.processTime:0),0);
    console.log(`Total processing time: ${totalTime} ms`);
})
.catch((error)=>{
    console.error('Batch processing failed:',error);
});

//examples based on microtask and macrotasks
//Example1

console.log('A');
setTimeout(() => {
    console.log('B');
}, 0);
Promise.resolve().then(() => {
    console.log('C');
});
console.log('D');
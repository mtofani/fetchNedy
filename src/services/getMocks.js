const getMocks = async () => {
  const username = 'maxi'
  const password = 'test'

  //let url = 'https://swapi.dev/api/people/'
  //et response = await fetch(url)
  //response = await response.json()

  const response = await fetch(
    // "http://172.22.83.1/pandora_console/include/api.php?op=get&op2=pandora_servers&apipass=iplanapi&user=admin&pass=Iplan.2020&return_type=json&"
    'http://172.31.148.235:8080/nms/api/querys/allbymodel/C300',
    {
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64'),
      },
    }
  )
  console.log(response)
  const data = await response.json()
  //const array = res.data;
  console.log(data)

  return data
}

export default getMocks

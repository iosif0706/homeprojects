import json


def main():
    data = {"key1" : "value1", "key2" : "value2"}
    data1 =  """{"key1" : "value1", "key2" : "value2"}"""
    jsonData = json.dumps(data)
    ex = json.loads(data1)
    prityprint =json.dumps(data, indent=1, separators=(",", " = "))

    cash = """
    { 
    "company":
            { 
            "employee":{ 
                        "name":"emma",
                        "payble":{ 
                            "salary":7000,
                            "bonus":800
                        }
                    }
                }
    }"""

    salary_value = json.loads(cash)
    print(salary_value['company']['employee']['payble']['salary'])
    print(prityprint)
    print(ex["key1"])
    print(jsonData)

main()
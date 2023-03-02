class Pessoa{
    constructor(pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome() { return this.nome};
    set Nome(pNome){ this.nome = pNome};
    get Endereco() { return this.endereco};
    set Endereco(pEndereco){ this.endereco = pEndereco};

    toString(){
        return `Nome: ${this.nome} \nEndereço: ${this.endereco}`;
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDtNascimento){
        super(pNome, pEndereco);
        this.Cpf = pCpf;
        this.DtNascimento = pDtNascimento;
    }
    get Cpf() { return this.cpf};
    set Cpf(pCpf){ this.cpf = pCpf};
    get DtNascimento() { return this.dtNascimento};
    set DtNascimento(pDtNascimento){ this.dtNascimento = pDtNascimento};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dtNascimento}`;
        return retorno;
    }
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome, pEndereco);
        this.Cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial;
    }
    get Cnpj() { return this.cnpj};
    set Cnpj(pCnpj){ this.cnpj = pCnpj};
    get RazaoSocial() { return this.razaoSocial};
    set RazaoSocial(pRazaoSocial){ this.razaoSocial = pRazaoSocial};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razaoSocial}`;
        return retorno;
    }
}

var fisica = new Fisica("Nome aqui", "Endereco aqui","CPF aqui","Data de nascimento aqui");
console.log(fisica.toString());

var juridica = new Juridica("Nome aqui", "Endereco aqui","CNPJ aqui","Razao social aqui");
console.log(juridica.toString());
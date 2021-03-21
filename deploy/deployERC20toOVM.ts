import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const _initialSupply = hre.ethers.utils.parseEther('1000000000')
  const _name = 'My Optimistic ERC20 Token'

  await deploy('ERC20-ovm', {
    from: deployer,
    args: [_initialSupply, _name],
    log: true,
    gasPrice: hre.ethers.BigNumber.from('0')
  })

  /**
   * @dev Specify network to deploy to
   */
}

export default func
func.tags = ['ERC20-ovm'] 
// import { Socket } from "socket.io";
import Config from "./Config";

const game = new Phaser.Game(Config);

export default game;

/**
 * 서버로부터 데이터 받기
 * - 상대 플레이어의 좌표
 *
 * 서버에 데이터 보내기
 * - 특정 시간마다 플레이어의 위치를 보내기 (timer intterupt처럼)
 *
 * 클라이언트도 위치 정보를 항상 업데이트 해서 가지고 있어야함
 *
 */
